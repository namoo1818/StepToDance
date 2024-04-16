package com.dance101.steptodance.user.service;

import com.dance101.steptodance.global.exception.category.NotFoundException;
import com.dance101.steptodance.user.domain.User;
import com.dance101.steptodance.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.dance101.steptodance.global.exception.data.response.ErrorCode.UNDEFINED_USER;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Transactional
    @Override
    public void deleteUser(long userId) {
        // get user
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new NotFoundException("UserServiceImpl:deleteUser", UNDEFINED_USER));

        // delete user
        userRepository.delete(user);
    }
}
