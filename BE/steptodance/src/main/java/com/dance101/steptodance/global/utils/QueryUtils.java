package com.dance101.steptodance.global.utils;

import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberExpression;
import org.springframework.stereotype.Repository;

@Repository
public class QueryUtils {
    public NumberExpression<Integer> createRankingSQL(NumberExpression<Double> totalScore) {
        return Expressions.numberTemplate(Integer.class, "rank() over (order by {0} desc)", totalScore);
    }
}
