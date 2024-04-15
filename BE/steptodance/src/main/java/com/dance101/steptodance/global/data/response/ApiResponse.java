package com.dance101.steptodance.global.data.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
@NoArgsConstructor
public class ApiResponse<T> {
    private int status;
    private String message;
    private T data;

    @Builder
    public ApiResponse(int status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    /**
     * 반환값이 있는 DefaultResponse 를 ResponseEntity 형식으로 반환하기 위한 메소드입니다.
     *
     * @param httpStatus
     * @param statusCode
     * @param data
     * @param <T>
     * @return
     */
    public static <T> ResponseEntity<ApiResponse<T>> toResponse(HttpStatus httpStatus, StatusCode statusCode, T data) {
        return ResponseEntity
            .status(httpStatus)
            .body(
                ApiResponse.<T>builder()
                    .status(statusCode.getStatus())
                    .message(statusCode.getMessage())
                    .data(data)
                    .build()
            );
    }

    /**
     * 반환값이 없는 DefaultResponse 를 ResponseEntity 형식으로 반환하기 위한 메소드입니다.
     *
     * @param httpStatus
     * @param statusCode
     * @param <T>
     * @return
     */
    public static <T> ResponseEntity<ApiResponse<T>> toEmptyResponse(HttpStatus httpStatus, StatusCode statusCode) {
        return ResponseEntity
            .status(httpStatus)
            .body(
                ApiResponse.<T>builder()
                    .status(statusCode.getStatus())
                    .message(statusCode.getMessage())
                    .build()
            );
    }
}
