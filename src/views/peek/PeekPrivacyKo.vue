<template>
  <main>
    <p><router-link to="/peek/privacy">Read in English</router-link></p>

    <h1>Peek 개인정보처리방침 (한국어)</h1>
    <p>시행일: 2026년 11월 16일</p>

    <p>
      Peek(com.iank.im.peek, 이하 "앱")은 사용자의 프라이버시를 최우선으로 설계된 독립형 AI
      클라이언트 애플리케이션입니다. 본 개인정보처리방침은 앱 이용 과정에서 데이터가 어떻게
      처리되는지 설명합니다.
    </p>

    <h2>1. 개발자의 개인정보 수집 및 서버 저장 없음</h2>
    <p>
      개발자(app.iank.im)는 별도의 백엔드 서버를 운영하지 않으며, 사용자의 대화 내용, 촬영·첨부한
      이미지, API 키, 기기 식별자 등 어떠한 개인정보도 개발자의 서버로 수집·전송·저장하지 않습니다.
    </p>

    <h2>2. 기기 내 로컬 저장 및 보안</h2>
    <ul>
      <li>
        모든 대화 내역, 메시지, 첨부 이미지 및 앱 설정은 사용자의 기기 내부 저장소에만 로컬로
        보관됩니다.
      </li>
      <li>
        사용자가 등록한 외부 AI 서비스의 API 키는 Android Keystore 및 Google Tink 암호화 기술을
        통해 기기 내부에 암호화되어 안전하게 저장됩니다.
      </li>
    </ul>

    <h2>3. 제3자 AI API 제공자와의 직접 통신</h2>
    <ul>
      <li>
        본 앱은 사용자가 직접 API 키와 엔드포인트(URL)를 설정하여 사용하는 클라이언트(BYOK, Bring
        Your Own Key) 방식입니다.
      </li>
      <li>
        사용자가 메시지를 전송할 때 입력한 텍스트, 이미지 및 시스템 지침은 개발자 서버를 거치지 않고
        사용자가 설정한 외부 AI 제공자(예: Google Gemini API, OpenAI API 또는 사용자 지정 서버)로
        직접 전송됩니다.
      </li>
      <li>
        외부 AI 제공자로 전송된 데이터의 처리, 보관 및 학습 활용 여부는 해당 제공자의
        개인정보처리방침을 따릅니다. 이용 전 각 서비스의 정책을 확인해 주시기 바랍니다.
        <ul>
          <li>
            Google 개인정보처리방침:
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
          </li>
          <li>
            OpenAI 개인정보처리방침:
            <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">https://openai.com/policies/privacy-policy</a>
          </li>
        </ul>
      </li>
    </ul>

    <h2>4. 앱 권한 사용 목적</h2>
    <p>앱은 핵심 기능 제공을 위해 아래 권한만을 최소한으로 요청합니다.</p>
    <ul>
      <li>
        카메라 (CAMERA): AI에게 질문할 대상을 앱 내에서 직접 촬영하기 위한 용도로만 사용됩니다.
        촬영된 이미지는 사용자가 전송을 실행하기 전까지 외부로 전송되지 않습니다.
      </li>
      <li>
        알림 및 포그라운드 서비스 (POST_NOTIFICATIONS, FOREGROUND_SERVICE_DATA_SYNC): AI 응답을
        기다리는 동안 다른 앱으로 전환해도 네트워크 요청이 중단되지 않도록 유지하고, 백그라운드에서
        응답이 완료되었을 때 사용자에게 알림을 표시하기 위해 사용됩니다.
      </li>
      <li>
        사진 선택기 (Photo Picker): 사용자가 기기 갤러리에 저장된 기존 이미지를 직접 선택해 대화에
        첨부할 때만 접근하며, 선택하지 않은 다른 사진에는 접근하지 않습니다.
      </li>
    </ul>

    <h2>5. AI 응답 신고 기능</h2>
    <ul>
      <li>
        사용자가 부적절하거나 부정확한 AI 응답에 대해 앱 내 '응답 신고' 기능을 실행할 경우, 기기에
        설치된 기본 이메일 앱을 통해 신고 사유, 사용된 모델 정보 및 해당 응답 텍스트가 포함된 메일
        초안이 생성됩니다.
      </li>
      <li>
        신고 내용은 사용자가 이메일 앱에서 직접 전송 버튼을 누른 경우에만 개발자 이메일로 전달되며,
        자동 수집되지 않습니다.
      </li>
    </ul>

    <h2>6. 데이터 보관 및 삭제</h2>
    <ul>
      <li>
        모든 데이터는 사용자 기기에만 존재하므로, 사용자는 언제든지 앱 내에서 개별 대화방, 메시지,
        API 프리셋을 삭제하거나 앱을 제거함으로써 모든 로컬 데이터를 영구적으로 파기할 수 있습니다.
      </li>
    </ul>

    <h2>7. 아동의 개인정보 보호</h2>
    <ul>
      <li>
        본 앱은 만 13세(또는 각 관할권의 디지털 동의 연령) 미만 아동을 대상으로 하지 않으며, 아동의
        개인정보를 의도적으로 수집하지 않습니다.
      </li>
    </ul>

    <h2>8. 개인정보처리방침 변경 및 문의처</h2>
    <ul>
      <li>본 방침이 변경될 경우 본 페이지를 통해 공지합니다.</li>
      <li>
        개인정보 처리와 관련된 문의 사항은 아래 이메일로 연락해 주시기 바랍니다.
        <ul>
          <li>이메일: <a href="mailto:support@app.iank.im">support@app.iank.im</a></li>
        </ul>
      </li>
    </ul>
  </main>
</template>
