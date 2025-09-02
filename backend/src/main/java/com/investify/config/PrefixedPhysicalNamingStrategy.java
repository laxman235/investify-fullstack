package com.investify.config;

import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;

public class PrefixedPhysicalNamingStrategy extends PhysicalNamingStrategyStandardImpl {
    private static final String PREFIX = "tbl_";

    @Override
    public Identifier toPhysicalTableName(Identifier name, JdbcEnvironment context) {
        if (name == null) return null;
        String newName = PREFIX + name.getText();
        return Identifier.toIdentifier(newName);
    }
}