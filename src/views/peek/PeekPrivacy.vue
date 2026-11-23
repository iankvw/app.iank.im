<template>
  <main>
    <p><router-link to="/peek/privacy/ko">한국어로 보기 (Korean)</router-link></p>

    <h1>Privacy Policy for Peek (English)</h1>
    <p>Effective Date: November 16, 2026</p>

    <p>
      Peek (com.iank.im.peek, "the App") is an independent AI client application designed with user
      privacy as a core principle. This Privacy Policy explains how information is handled when you
      use the App.
    </p>

    <h2>1. No Data Collection by the Developer</h2>
    <p>
      The developer (app.iank.im) does not operate any backend servers for the App and does not
      collect, transmit, store, or sell any personal data, chat histories, images, API keys, or
      device identifiers on developer-controlled servers.
    </p>

    <h2>2. Local Storage and Security</h2>
    <ul>
      <li>
        All conversations, messages, attached images, and app preferences are stored exclusively
        locally on your device.
      </li>
      <li>
        API keys you configure are encrypted and stored locally on your device using Android
        Keystore and Google Tink cryptographic libraries.
      </li>
    </ul>

    <h2>3. Direct Transmission to Third-Party AI Providers</h2>
    <ul>
      <li>
        Peek operates as a Bring-Your-Own-Key (BYOK) client. When you send a message, your text
        prompts, images, and system instructions are transmitted directly from your device to the
        third-party AI API endpoint you configured (such as Google Gemini API, OpenAI API, or a
        custom OpenAI-compatible endpoint).
      </li>
      <li>
        Data sent to third-party AI providers is governed by their respective privacy policies and
        terms of service:
        <ul>
          <li>
            Google Privacy Policy:
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
          </li>
          <li>
            OpenAI Privacy Policy:
            <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">https://openai.com/policies/privacy-policy</a>
          </li>
        </ul>
      </li>
    </ul>

    <h2>4. App Permissions</h2>
    <p>The App requests only the minimum permissions required for its core functionality:</p>
    <ul>
      <li>
        Camera (CAMERA): Used solely to capture photos within the App for visual AI queries.
        Captured photos are not transmitted externally until you explicitly send them.
      </li>
      <li>
        Notifications &amp; Foreground Service (POST_NOTIFICATIONS, FOREGROUND_SERVICE_DATA_SYNC):
        Used solely to keep active AI network requests alive when switching to other apps and to
        notify you when a response completes in the background.
      </li>
      <li>
        Photo Picker: Accessed only when you explicitly choose existing images from your device
        gallery to attach to a prompt. The App does not access unselected media.
      </li>
    </ul>

    <h2>5. In-App Response Reporting</h2>
    <p>
      If you choose to report an AI-generated response, the App opens your device's default email
      client with a pre-filled draft containing the report reason, model metadata, and the reported
      message content. No data is sent unless you explicitly confirm and send the email.
    </p>

    <h2>6. Data Retention and Deletion</h2>
    <p>
      Because all data resides locally on your device, you have complete control over it. You can
      delete individual conversations, messages, or API presets at any time within the App, or
      uninstall the App to permanently remove all local data.
    </p>

    <h2>7. Children's Privacy</h2>
    <p>
      The App is not directed to children under the age of 13 (or the applicable age of digital
      consent in your jurisdiction), and we do not knowingly collect personal information from
      children.
    </p>

    <h2>8. Changes and Contact Information</h2>
    <ul>
      <li>
        Any updates to this Privacy Policy will be posted on this page with an updated effective
        date.
      </li>
      <li>
        If you have any questions regarding this Privacy Policy, please contact:
        <ul>
          <li>Email: <a href="mailto:support@app.iank.im">support@app.iank.im</a></li>
        </ul>
      </li>
    </ul>
  </main>
</template>
