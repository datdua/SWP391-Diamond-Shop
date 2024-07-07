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

    // common urls (guest): là những api mà không cần phải xác thực
    private static final String[] GUEST_URL = {"/guest/**", "/api/accounts/guest/**","/api/diamonds/guest/**", "/api/diamondprices/guest/**", 
        "/api/goldPrices/guest/**", "/api/certificates/guest/**", "/api/cart/guest/**", "/api/collections/guest/**", "/api/customers/guest/**", 
        "/api/jewelry/guest/**", "/api/orders/guest/**", "/api/orderDetail/guest/**", "/api/payment/guest/**", "/api/production/guest/**", "/api/promotion/guest/**", 
        "/api/warranties/guest/**"};

    // admin urls: là những api mà chỉ admin mới được phép truy cập (/api/(tên
    // controller)/admin/**)
    private static final String[] ADMIN_URL = {"/admin/**", "/api/accounts/admin/**", "/api/certificates/admin/**", "/api/cart/admin/**", "/api/collections/admin/**",
        "/api/customers/admin/**" ,"/api/diamonds/admin/**", "/api/diamondprices/admin/**", "/api/goldPrices/admin/**", "/api/jewelry/admin/**", 
        "/api/orders/admin/**", "/api/orderDetail/admin/**", "/api/payment/admin/**", "/api/production/admin/**", "/api/promotion/admin/**", "/api/warranties/admin/**"};

    // customer urls: là những api mà chỉ customer mới được phép truy cập (/api/(tên
    // controller)/customer/**)
    private static final String[] CUSTOMER_URL = {"/customer/**","/api/accounts/customer/**", "/api/certificates/customer/**", "/api/cart/customer/**",
        "/api/collections/customer/**", "/api/customers/admin/**", "/api/diamondprices/customer/**", "/api/goldPrices/customer/**", 
        "/api/jewelry/customer/**", "/api/orders/customer/**", "/api/orderDetail/customer/**", "/api/payment/customer/**", "/api/production/customer/**", "/api/promotion/customer/**", 
        "/api/warranties/customer/**"};

    // manager urls:
    private static final String[] MANAGER_URL = {"/manager/**", "/api/accounts/manager/**", "/api/certificates/manager/**", "/api/cart/manager/**",
        "/api/collections/manager/**", "/api/customers/manager/**", "/api/diamondprices/manager/**", "/api/goldPrices/manager/**", "/api/jewelry/manager/**", 
        "/api/orders/manager/**", "/api/orderDetail/manager/**", "/api/payment/manager/**", "/api/production/manager/**", "/api/promotion/manager/**", 
        "/api/warranties/manager/**"};

    //Admin and Manager urls
    private static final String[] ADMIN_MANAGER_URL = {"/api/accounts/get-all", "/api/accounts/all-except-customer", "/api/accounts/getByRole/**", "/api/certificates/get-all", "/api/certificates/getById/**", "/api/certificates/get/certificateImg/**", "/api/diamonds/get-all", "/api/diamondprices/get-all",
         "/api/goldPrices/get-all", "/api/jewelry/get-all", "/api/orders/get-all", "/api/orders/getOrderHaveTransactionNo", "/api/orders/getByStatus/**", "/api/orders/totalRevenue", "/api/orders/totalOrder", "/api/orders/totalTransaction", "api/promotion/get-all", "/api/warranties/get-all", "/api/warranties/get/warrantyImg/**",
         "/api/warranties/diamondIDIsNull", "/api/warranties/jewelryIDIsNull" };

    @Autowired
    private final AccountService UserService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    public SecurityConfig(AccountService UserService, JwtRequestFilter jwtRequestFilter) {
        this.UserService = UserService;
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(withDefaults())
                .csrf(csrf -> csrf.disable())
                .authorizeRequests(authz -> authz
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Allow preflight requests
                .antMatchers(SWAGGER_URL).permitAll()
                .antMatchers(GUEST_URL).permitAll()
                .antMatchers(ADMIN_URL).hasRole("ADMIN")
                .antMatchers(CUSTOMER_URL).hasRole("CUSTOMER")
                .antMatchers(MANAGER_URL).hasRole("MANAGER")
                .antMatchers(ADMIN_MANAGER_URL).hasAnyRole("ADMIN", "MANAGER")
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
