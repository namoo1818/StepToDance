package com.dance101.steptodance.global.exception.handler;

import com.dance101.steptodance.global.exception.category.*;
import com.dance101.steptodance.global.exception.data.response.ErrorResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RequiredArgsConstructor
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 400 에러
     * DTO validation 에러 핸들러
     *
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ErrorResponse methodValidationHandler(MethodArgumentNotValidException exception) {
        String message = exception.getBindingResult().getAllErrors().get(0).getDefaultMessage();
        log.error(message, exception);
        return new ErrorResponse(HttpStatus.BAD_REQUEST, message);
    }

    /**
     * 400 에러
     * 잘못된 요청 에러 핸들러
     *
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BadRequestException.class)
    public ErrorResponse badRequestHandler(SteptodanceRuntimeException exception) {
        log.error(exception.getMessageKey(), exception, exception.getParams());
        return new ErrorResponse(exception.getErrorCode());
    }

    /**
     * 401 에러
     * 인증 없음 에러 핸들러
     *
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(UnAuthorizedException.class)
    public ErrorResponse unAuthorizedHandler(SteptodanceRuntimeException exception) {
        log.error(exception.getMessageKey(), exception, exception.getParams());
        return new ErrorResponse(exception.getErrorCode());
    }

    /**
     * 403 에러
     * 권한 없음 에러 핸들러
     *
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(ForbiddenException.class)
    public ErrorResponse forbiddenHandler(SteptodanceRuntimeException exception) {
        log.error(exception.getMessageKey(), exception, exception.getParams());
        return new ErrorResponse(exception.getErrorCode());
    }

    /**
     * 404 에러
     * 리소스 없음 에러 핸들러
     *
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ChangeSetPersister.NotFoundException.class)
    public ErrorResponse notFoundHandler(SteptodanceRuntimeException exception) {
        log.error(exception.getMessageKey(), exception, exception.getParams());
        return new ErrorResponse(exception.getErrorCode());
    }

    /**
     * 404 에러
     * 리소스 없음 에러 핸들러
     *
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NotFoundException.class)
    public ErrorResponse notFoundCustomHandler(SteptodanceRuntimeException exception) {
        log.error(exception.getMessageKey(), exception, exception.getParams());
        return new ErrorResponse(exception.getErrorCode());
    }

    /**
     * 400 에러
     * DTO validation 에러 핸들러
     *
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ValidationException.class)
    public ErrorResponse validationHandler(SteptodanceRuntimeException exception) {
        log.error(exception.getMessageKey(), exception, exception.getParams());
        return new ErrorResponse(exception.getErrorCode());
    }

    /**
     * 500 에러
     * 외부 서버와의 통신 에러 핸들러
     *
     * @param exception
     * @return
     */
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(ExternalServerException.class)
    public ErrorResponse externalServerHandler(SteptodanceRuntimeException exception) {
        log.error(exception.getMessageKey(), exception, exception.getParams());
        return new ErrorResponse(exception.getErrorCode());
    }
}
