# 아이 교육 자료실

아이 교육 관련 자료, 캠프 보고서, 진로 메모 등을 정리해 두는 정적 사이트입니다.

## 구조

```
.
├── index.html                              # 메인 페이지 (자료 목록)
├── assets/
│   └── style.css                            # 공통 스타일
└── reports/
    └── 2026-summer-camp/
        ├── index.html                       # 2026 여름 영어 캠프 보고서
        └── 2026_여름_영어캠프_보고서.docx     # 원본 Word 문서
```

## 새 페이지 추가하기

새 보고서를 추가하려면 `reports/페이지-슬러그/index.html` 형태로 폴더를 만들어 페이지를 작성한 뒤, 루트 `index.html`의 `card-list` 안에 해당 페이지로 연결되는 카드 링크를 추가하면 됩니다.

```html
<a class="card" href="./reports/페이지-슬러그/">
  <div class="card-meta">
    <span class="tag">카테고리</span>
    <span>날짜</span>
  </div>
  <h2 class="card-title">제목</h2>
  <p class="card-desc">설명</p>
</a>
```

## GitHub Pages 활성화

레포의 **Settings → Pages**에서 Source를 `Deploy from a branch`, Branch를 `main` / `(root)`로 설정하면 몇 분 안에 `https://catomo88.github.io/education/` 에서 사이트에 접속할 수 있습니다.
