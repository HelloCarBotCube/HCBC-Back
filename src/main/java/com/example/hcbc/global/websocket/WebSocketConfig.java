package com.example.hcbc.global.websocket;

import com.example.hcbc.global.security.jwt.ParsedClaims;
import com.example.hcbc.global.security.jwt.TokenParser;
import com.example.hcbc.global.security.jwt.TokenType;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import java.util.Collections;

@Configuration
@EnableWebSocketMessageBroker
@RequiredArgsConstructor
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    private final TokenParser tokenParser;
    private static final String WS_AUTH_ATTR = "WS_AUTH";

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws-stomp")
                .setAllowedOriginPatterns("*")
                .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new ChannelInterceptor() {
            @Override
            public Message<?> preSend(Message<?> message, MessageChannel channel) {
                StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);

                if (StompCommand.CONNECT.equals(accessor.getCommand())) {
                    String raw = accessor.getFirstNativeHeader("token");
                    String token = (raw != null && raw.startsWith("Bearer ")) ? raw.substring(7) : raw;

                    if (token != null && !token.isBlank()) {
                        try {
                            ParsedClaims c = tokenParser.parse(token, TokenType.ACCESS);

                            Authentication auth = new UsernamePasswordAuthenticationToken(
                                    new WsPrincipal(c.memberId(), c.loginId()),
                                    null,
                                    Collections.emptyList()
                            );

                            accessor.setUser(auth);
                            accessor.getSessionAttributes().put(WS_AUTH_ATTR, auth);

                        } catch (Exception e) {
                            System.out.println("[WS][CONNECT] invalid token: " + e.getClass().getSimpleName() + " - " + e.getMessage());
                        }
                    }
                } else {
                    if (accessor.getUser() == null) {
                        Object saved = accessor.getSessionAttributes().get(WS_AUTH_ATTR);
                        if (saved instanceof Authentication auth) {
                            accessor.setUser(auth);
                        }
                    }
                }

                if (accessor.getUser() != null) {
                    accessor.setHeader(SimpMessageHeaderAccessor.USER_HEADER, accessor.getUser());
                }

                return MessageBuilder.createMessage(message.getPayload(), accessor.getMessageHeaders());
            }
        },new org.springframework.security.messaging.context.SecurityContextChannelInterceptor());
    }
}
