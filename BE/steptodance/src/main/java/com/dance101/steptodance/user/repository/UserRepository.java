package com.dance101.steptodance.user.repository;

import com.dance101.steptodance.user.data.response.MyRankResponse;
import com.dance101.steptodance.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom {
    boolean existsByKakaoId(String kakaoId);

    Optional<User> findByKakaoId(String kakaoId);

    @Query("select new com.dance101.steptodance.user.data.response.MyRankResponse(sub_query.nickname, sub_query.profileImgUrl, sub_query.score, sub_query.ranking) " +
        "from (select u.id, u.nickname, u.profileImgUrl, sum(f.score) as score, rank() over (order by sum(f.score) desc) as ranking " +
        "from User u left join Feedback f on u.id = f.user.id " +
        "group by u.id) as sub_query " +
        "where sub_query.id = :userId")
    Optional<MyRankResponse> findMyRankInfo(@Param("userId") long userId);
}
