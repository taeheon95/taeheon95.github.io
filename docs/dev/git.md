---
title: git
tag: git, 기능 정리
description: git의 기본 기능 정리
---

# git이란?

git은 분산형 버전 관리 시스템이다. 파일의 변경사항을 추적해서 여러 사용자들 간에 파일에 대한 작업을 조율하는데 사용한다.

## 버전 관리란

버전 관리는 소스 코드나 파일의 변경 이력을 관리하는 시스템입니다. 이를 통해 누가 언제 어떤 부분을 수정했는지 파악할 수 있고, 문제가 발생했을 때 이전 상태로 쉽게 되돌릴 수 있습니다.

## Git의 3가지 상태 (3 States)

Git은 파일을 세 가지 주요 상태로 관리합니다:

1. **Modified (수정됨)**: 수정한 파일을 아직 로컬 데이터베이스에 커밋하지 않은 상태. (Working Directory)
2. **Staged (스테이징됨)**: 현재 수정한 파일을 곧 커밋할 것이라고 표시한 상태. (Staging Area)
3. **Committed (커밋됨)**: 데이터가 로컬 데이터베이스에 안전하게 저장된 상태. (Git Directory/Repository)

이러한 상태에 따라 Git 프로젝트는 세 가지 주요 영역으로 나뉩니다:

- **Working Directory (작업 디렉토리)**: 실제 프로젝트 파일들이 있는 곳. 파일을 수정하는 작업이 이루어집니다.
- **Staging Area (스테이징 영역)**: 커밋할 파일들의 목록(Index)이 저장되는 곳. 커밋 전 변경사항을 준비하는 공간입니다.
- **Git Directory (.git)**: Git이 프로젝트의 메타데이터와 객체 데이터베이스를 저장하는 곳. (Local Repository)

## Git 기본 명령어

### 1. 설정 및 초기화

- `git config`: Git 사용자 설정 (이름, 이메일 등)
  - `git config --global user.name "Your Name"`
  - `git config --global user.email "your.email@example.com"`
- `git init`: 새로운 로컬 저장소 생성
- `git clone [URL]`: 원격 저장소를 로컬로 복제

### 2. 기본 작업 흐름

- `git status`: 현재 저장소의 파일 상태 확인
- `git add [파일명]`: 변경된 파일을 Staging Area에 추가 (모든 파일 추가는 `git add .`)
- `git commit -m "커밋 메시지"`: Staging Area의 파일들을 Git Directory에 저장 (커밋)
- `git log`: 커밋 히스토리 확인

### 3. 브랜치(Branch) 관리

- `git branch`: 현재 브랜치 목록 확인
- `git branch [브랜치명]`: 새로운 브랜치 생성
- `git checkout [브랜치명]` 또는 `git switch [브랜치명]`: 해당 브랜치로 이동
- `git merge [브랜치명]`: 현재 브랜치에 다른 브랜치의 변경사항 병합

### 4. 원격 저장소 (Remote Repository) 활용

- `git remote add origin [URL]`: 로컬 저장소에 원격 저장소 연결
- `git push origin [브랜치명]`: 로컬의 커밋을 원격 저장소로 업로드
- `git pull origin [브랜치명]`: 원격 저장소의 변경사항을 로컬로 가져와 병합
- `git fetch`: 원격 저장소의 변경사항을 가져오기만 함 (병합 X)

## Git의 장점

1. **분산형 시스템**: 서버에 문제가 생겨도 로컬 저장소에 모든 히스토리가 있어 복구가 쉽습니다.
2. **빠른 속도**: 대부분의 작업이 로컬에서 이루어져 네트워크 지연 없이 빠르게 동작합니다.
3. **강력한 브랜칭 모델**: 가볍고 빠른 브랜치 생성/병합을 지원하여 독립적인 작업과 협업을 원활하게 합니다.
