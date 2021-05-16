package com.adprod.inventar.repositories;

import com.adprod.inventar.models.PrenotedBook;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrenotedBookRepository extends MongoRepository<PrenotedBook, String> {
    List<PrenotedBook> findAllByAssociateID(String associateID);
    PrenotedBook findByAssociateIDAndId(String associateID, String bookID);
}
