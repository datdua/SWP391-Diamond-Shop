package com.example.diamondstore.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.diamondstore.filter.JwtRequestFilter;
import com.example.diamondstore.service.AccountService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private static final String[] SWAGGER_URL = {"/api/v1/auth/**", "/v2/api-docs", "/v3/api-docs",
        "/v3/api-docs/**", "/swagger-resources", "/swagger-resources/**", "/configuration/ui",
        "/configuration/security", "/swagger-ui/**", "/webjars/**", "/swagger-ui.html", "/api/auth/**",
        "/api/test/**", "/authenticate"};

    // private static final String[] COMMON_URL = {"/login", "/api/accounts/register", "/api/diamonds/**",
    //     "/api/certificates/**", "/api/jewelry/**", "/api/customers/**",
    //     "/api/accounts/forgetPassword/**", "/api/promotion/**", "/api/warranties/**", "/api/orders/**",
    //     "/api/cart/**", "/api/accounts/**",
    //     "/api/accounts", "/api/cart", "api/collections/**", "/api/collections", "/api/production/**",
    //     "/api/production", "/api/diamondprices", "/api/diamondprices/**", "/api/goldPrices", "/api/goldPrices/**"};

    // common urls (guest): là những api mà không cần phải xác thực
    private static final String[] GUEST_URL = {"/guest/**", "/api/accounts/guest/**"};

    // admin urls: là những api mà chỉ admin mới được phép truy cập (/api/(tên
    // controller)/admin/**)
    private static final String[] ADMIN_URL = {"/api/accounts/admin/**"};

    // customer urls: là những api mà chỉ customer mới được phép truy cập (/api/(tên
    // controller)/customer/**)
    private static final String[] CUSTOMER_URL = {"/api/accounts/customer/**"};
    @Autowired
    private final AccountService UserService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    public SecurityConfig(AccountService UserService, JwtRequestFilter jwtRequestFilter) {
        this.UserService = UserService;
        this.jwtRequestFilter = jwtRequestFilter;
    }

    // @Bean
    // public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    //     http
    //             .cors(withDefaults())
    //             .csrf(csrf -> csrf.disable())
    //             .authorizeRequests(authz -> authz
    //             .antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Allow preflight requests
    //             .antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Allow preflight requests
    //             .antMatchers(SWAGGER_URL).permitAll()
    //             .antMatchers(COMMON_URL).permitAll()
    //             .anyRequest().authenticated())
    //             .exceptionHandling(e -> e
    //             .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
    //             .sessionManagement(s -> s
    //             .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
    //             .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    //     return http.build();
    // }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(withDefaults())
                .csrf(csrf -> csrf.disable())
                .authorizeRequests(authz -> authz
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Allow preflight requests
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Allow preflight requests
                .antMatchers(SWAGGER_URL).permitAll()
                .antMatchers(GUEST_URL).permitAll()
                .antMatchers(ADMIN_URL).hasRole("ADMIN")
                .antMatchers(CUSTOMER_URL).hasRole("CUSTOMER")
                .anyRequest().authenticated())
                .exceptionHandling(e -> e
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
                .sessionManagement(s -> s
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "https://the-diamond-store-demo.web.app",
                "https://www.thediamondstore.site"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
