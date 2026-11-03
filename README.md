# 펀앤런(Fun&Learn) 홈페이지

반응형 정적 웹사이트입니다. GitHub Pages에 업로드할 수 있도록 HTML/CSS/JavaScript로 구성했습니다.

## 파일 구성
- `index.html` : 메인 홈페이지
- `privacy.html` : 개인정보 처리방침 초안
- `assets/css/style.css` : 디자인 및 반응형 스타일
- `assets/js/main.js` : 모바일 메뉴, 프로젝트 필터, 언어 전환
- `assets/images/` : 사진을 넣는 폴더

## 사진 교체
아래 파일명으로 실제 사용이 허가된 사진을 넣으면 메인 화면과 갤러리에 표시할 수 있도록 경로를 준비했습니다.
- `assets/images/profile.jpg`
- `assets/images/ai-education.jpg`
- `assets/images/robotics.jpg`
- `assets/images/research.jpg`

현재 사진은 임의로 만들거나 타인의 사진을 사용하지 않았으며, 이미지 영역은 안내용 디자인으로 표시됩니다. 업로드한 뒤 `index.html`과 `style.css`에서 이미지 배경/요소를 실제 `<img>`로 교체해야 합니다. 프로필 사진은 본인 사진을 사용해 주세요.

## GitHub Pages 게시
1. 저장소 `astrosy1004/funlearn`을 엽니다.
2. `Add file` → `Upload files`를 선택합니다.
3. 압축을 푼 폴더 안의 **파일과 폴더**를 모두 업로드합니다. `funlearn_site` 폴더 자체가 아니라 그 안의 `index.html`, `assets`, `privacy.html` 등을 저장소 루트에 올립니다.
4. Commit changes를 누릅니다.
5. 저장소 `Settings` → `Pages`로 이동합니다.
6. Build and deployment에서 `Deploy from a branch`를 선택합니다.
7. Branch를 `main`, folder를 `/ (root)`로 선택하고 Save를 누릅니다.
8. 배포가 완료되면 `https://astrosy1004.github.io/funlearn/`에서 확인합니다.

## 게시 전 확인할 사항
- 책 제목, 출판사, 출간일을 공식 서지정보와 대조
- RoboMaster 성과 문구와 사진 공개 권한 확인
- 프로필 및 활동 사진 삽입, 학생 초상권/개인정보 동의 확인
- 자격증 명칭과 취득일 확인 후 ABOUT에 추가
- 문의 폼/자동 메일은 현재 미연동이며 이메일 링크만 제공
- Google Analytics/Search Console은 계정 ID를 발급받은 뒤 연동
- 영어 전환은 현재 대표 문구만 적용된 초기 버전이며, 전체 영문 번역은 후속 작업 필요

## 주의
기존 홈페이지 저장소는 수정하지 않습니다. 본 저장소에 새로 업로드할 파일만 포함되어 있습니다.
