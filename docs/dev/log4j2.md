---
title: log4j2
tag: log, backend
createAt: 2024-11-21
updateAt: 2024-11-21
description: log4j2의 장점 및 사용 방법 설명
---

# log4j2

log4j2는 apache에서 관리하는 자바의 로그라이브러리다. 기존에 사용하던 log4j에서 업그레이드 되어 사용하는 로그 라이브러리이다. 자바 진영에서 logback 과 함께 많이 쓰이는 라이브러리이다. 비동기와 람다로 로그를 남길 수 있어 높은 성능을 자랑한다.

## 성능

![loging 라이브러리 성능](./async-throughput-comparison.png)

logback 라이브러리와 log4j 와 비교했을 때 비동기로 로깅을 하는 경우, 성능이 엄청나게 올라가는 것을 확인 할 수 있다.