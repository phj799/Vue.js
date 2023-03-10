// 로그의 레벨 7
// error, warn, info, http, verbose, debug, silly
// error, wran, info, debug

// error -> 에러 기록
// warn -> 에러는 아니지만 유의할 내용
// info -> 내용
// debug 상세한 데이터들
// 이런 것들을 살펴볼 수 있도록 도와주는 logging library가 winston임

const express = require('express');
const morgan = require('morgan');
const logger = require('./utils/log');
const app = express();
app.use(morgan('dev'));
const PORT = 8080;

// 원격 로그 수집 시스템 (elastic stack)
// 여러군데 모여있는 로그를 한군데서 조회하고싶은경우 공부해볼 것

app.get("/api/logs", (req, res) => {
  
  logger.error("error 메세지");
  logger.warn("warn 메세지");
  logger.info("info 메세지");

  // debug가 안찍히는 이유
  // winston 셋팅에서 level을 info로 한정했기 때문
  logger.debug("debug 메세지");
  
  return res.json({
    test: "OK"
  })
})

app.listen(PORT, () => console.log(`${PORT} 서버 기동중`))