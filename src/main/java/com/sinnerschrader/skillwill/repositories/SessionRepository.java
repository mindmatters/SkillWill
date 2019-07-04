package com.sinnerschrader.skillwill.repositories;

import com.sinnerschrader.skillwill.session.Session;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Repository for Sessions
 * Collection: session
 *
 * @author torree
 */
public interface SessionRepository extends MongoRepository<Session, String> {

  Session findByToken(String token);

  List<Session> findByEmail(String mail);

}
