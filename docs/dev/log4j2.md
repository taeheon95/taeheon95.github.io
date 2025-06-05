---
title: log4j2
tag: log, backend
createAt: 2024-11-21
updateAt: 2025-06-06
description: log4j2의 장점 및 사용 방법 설명
---

# log4j2

log4j2는 apache에서 관리하는 자바의 로그라이브러리다. 기존에 있던 apache log4j에서 업그레이드 된 로그 라이브러리이다. 자바 진영에서 logback 과 함께 많이 쓰이는 라이브러리이다. 비동기와 람다로 로그를 남길 수 있어 높은 성능을 자랑한다.

## 성능

![loging 라이브러리 성능](./async-throughput-comparison.png)

logback 라이브러리와 log4j 와 비교했을 때 비동기로 로깅을 하는 경우, 쓰레드가 많을 때 성능이 기하급수적으로 올라가는 것을 확인할 수 있다.

## 사용방법

log4j2 라이브러리를 사용하기 위해선 우선 log4j2-core 라이브러리를 들고오는 것이 필요하다.gradle을 기준으로 build.gradle 에 있는 dependencies 에 log4j-core 라이브러리를 추가하고 log4j.xml을 작성해야 한다.

### 세팅

:::code-group

```groovy [build.gradle]
plugins {
    id 'java'
}

group = 'com.test'
version = '1.0-SNAPSHOT'

repositories {
    mavenCentral()
}

dependencies {
    // https://mvnrepository.com/artifact/org.apache.logging.log4j/log4j-core // [!code focus]
    implementation 'org.apache.logging.log4j:log4j-core:2.24.3' // [!code focus]
}

test {
    useJUnitPlatform()
}
```

```xml [log4j2.xml]
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="WARN" monitorInterval="30">
    <Appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout
                    disableAnsi="false"
                    noConsoleNoAnsi="false"
                    pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %highlight{%-5level} %pid --- [%15.15t] %c{1.} : %msg%n"/>
        </Console>
        <Async name="AsyncAppender">
            <AppenderRef ref="Console"/>
        </Async>
    </Appenders>
    <Loggers>
        <Logger name="com.test.test" level="DEBUG"/>
        <Root level="info">
            <AppenderRef ref="Console"/>
        </Root>
    </Loggers>
</Configuration>
```

:::

이렇게 세팅을 하면 코드에서 

```java
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Main {

    private static final Logger log = LogManager.getLogger(Main.class);

    public static void main(String[] args) {
        log.info("Hello and welcome!");
        log.info("Hello world");

        for (int i = 1; i <= 5; i++) {
            log.info("i = {}", i);
        }
    }
}
```

log4j 라이브러리를 사용할 수 있게 된다.