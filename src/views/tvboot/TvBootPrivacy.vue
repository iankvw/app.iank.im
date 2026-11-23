<template>
  <main>
    <h1>Privacy Policy for TvBoot: Auto Launch &amp; Keeper</h1>
    <p>Last updated: September 10, 2026</p>

    <p>
      TvBoot: Auto Launch &amp; Keeper ("the App") is developed as an open-utility tool. This
      Privacy Policy describes how the App handles user information.
    </p>

    <h2>1. Information Collection and Use</h2>
    <p>
      The App does NOT collect, store, transmit, or share any personally identifiable information or
      personal data of any kind. All settings and configuration preferences (e.g., target package
      name, toggle states) are stored strictly locally on your device via Android SharedPreferences
      and are never transmitted to external servers.
    </p>

    <h2>2. Device Permissions</h2>
    <p>
      The App requests specific Android system permissions strictly to perform its core offline
      functionalities:
    </p>
    <ul>
      <li>
        RECEIVE_BOOT_COMPLETED: Required to automatically launch the configured target application
        or service when the system finishes booting.
      </li>
      <li>
        WAKE_LOCK: Required to keep the CPU and network connectivity awake to prevent unexpected
        deep sleep.
      </li>
      <li>
        SYSTEM_ALERT_WINDOW: Required on modern Android versions to allow background Activity
        launches upon system boot.
      </li>
      <li>
        QUERY_ALL_PACKAGES: Required solely to let the user select installed system launchers and
        HDMI/TV input proxy applications on the device.
      </li>
    </ul>
    <p>
      None of these permissions are used to collect or monitor user activities or personal data.
    </p>

    <h2>3. Third-Party Services &amp; Analytics</h2>
    <p>The App does not integrate any third-party SDKs, advertisements, or analytics services.</p>

    <h2>4. Contact Us</h2>
    <p>If you have any questions or suggestions about this Privacy Policy, feel free to contact:</p>
    <ul>
      <li>Email: <a href="mailto:support@app.iank.im">support@app.iank.im</a></li>
    </ul>
  </main>
</template>
