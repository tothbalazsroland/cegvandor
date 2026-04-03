<template>
  <!-- HERO SECTION -->
  <section class="hero">
    <div class="hero-blob" aria-hidden="true"></div>
    <v-container class="py-16 hero-container">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <img
            src="/src/assets/logoonlytext.png"
            alt="Logo"
            class="hero-logo mb-8"
          />
          <h1 class="hero-title">
            {{ t('home.title') }}
          </h1>
          <p class="hero-subtitle mt-6">
            {{ t('home.subtitle') }}
          </p>
          <div class="hero-actions mt-10 d-flex justify-center flex-wrap ga-4">
            <v-btn
              color="primary"
              size="large"
              to="/kapcsolat"
              rounded="lg"
              elevation="0"
              class="px-8"
            >
              {{ t('nav.cta') }}
            </v-btn>
            <v-btn
              variant="outlined"
              color="primary"
              size="large"
              to="/hogyan-mukodunk"
              rounded="lg"
              elevation="0"
              class="px-8"
            >
              {{ t('home.ctaSecondary') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- WHY SECTION -->
  <section class="why">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-12">
          <h2 class="section-title">{{ t('home.whyChooseUs') }}</h2>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="feature-card h-100" elevation="0">
            <v-card-text class="pa-8">
              <div class="feature-icon-wrap mb-5">
                <v-icon color="primary" size="28">mdi-tune-variant</v-icon>
              </div>
              <h3 class="feature-title mb-3">{{ t('home.features.custom.title') }}</h3>
              <p class="feature-text">{{ t('home.features.custom.text') }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="feature-card h-100" elevation="0">
            <v-card-text class="pa-8">
              <div class="feature-icon-wrap mb-5">
                <v-icon color="primary" size="28">mdi-earth</v-icon>
              </div>
              <h3 class="feature-title mb-3">{{ t('home.features.global.title') }}</h3>
              <p class="feature-text">{{ t('home.features.global.text') }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="feature-card h-100" elevation="0">
            <v-card-text class="pa-8">
              <div class="feature-icon-wrap mb-5">
                <v-icon color="primary" size="28">mdi-shield-check-outline</v-icon>
              </div>
              <h3 class="feature-title mb-3">{{ t('home.features.reliable.title') }}</h3>
              <p class="feature-text">{{ t('home.features.reliable.text') }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- CLOSING / CTA SECTION -->
  <section class="closing">
    <v-container class="pb-16">
      <div class="cta-band">
        <h2 class="cta-band-title mb-4">{{ t('home.closingTitle') }}</h2>
        <p class="cta-band-text mb-8">{{ t('home.outro') }}</p>
        <v-btn
          color="primary"
          size="large"
          to="/kapcsolat"
          rounded="lg"
          elevation="0"
          class="px-10"
        >
          {{ t('nav.cta') }}
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────── */
.hero {
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

.hero-container {
  position: relative;
  z-index: 1;
}

.hero-blob {
  position: absolute;
  top: -120px;
  right: -180px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle at 60% 40%, #dde1f7 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.hero-logo {
  max-width: 420px;
  height: auto;
}

.hero-title {
  font-size: 3.0rem;
  font-weight: 700;
  line-height: 1.15;
  color: #111827;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(0, 0, 0, 0.62);
}

/* ── Features section ─────────────────────────── */
.why {
  background: #f8f9fe;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
}

.feature-card {
  border: 1px solid #e8eaf6;
  border-radius: 16px !important;
  background: #ffffff;
  transition: box-shadow 0.2s, transform 0.2s;
}

.feature-card:hover {
  box-shadow: 0 8px 32px rgba(34, 40, 141, 0.10) !important;
  transform: translateY(-2px);
}

.feature-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #eef0fb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
}

.feature-text {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.62);
  line-height: 1.65;
}

/* ── CTA band ─────────────────────────────────── */
.closing {
  background: #ffffff;
  padding-top: 0;
}

.cta-band {
  background: #eef0fb;
  border-radius: 20px;
  padding: 64px 48px;
  text-align: center;
}

.cta-band-title {
  font-size: 2rem;
  font-weight: 700;
  color: #22288d;
}

.cta-band-text {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.62);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

/* ── Responsive ───────────────────────────────── */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.4rem;
  }

  .hero-blob {
    width: 380px;
    height: 380px;
    right: -100px;
    top: -60px;
  }

  .cta-band {
    padding: 48px 24px;
  }
}

@media (max-width: 600px) {
  .hero-logo {
    width: 80%;
  }

  .hero-title {
    font-size: 2rem;
  }

  .cta-band-title {
    font-size: 1.5rem;
  }
}
</style>
