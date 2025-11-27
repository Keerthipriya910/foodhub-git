package com.projectt.repo;
import com.projectt.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin, String> {
    Admin findByUsername(String username);

}