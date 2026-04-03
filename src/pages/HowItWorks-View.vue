<template>
  <!-- PAGE HEADER -->
  <section class="page-header">
    <v-container class="py-16 text-center">
      <h1 class="section-title">{{ t('howItWorksPage.title') }}</h1>
      <p class="subtitle mt-4">
        {{ t('howItWorksPage.subtitle') }}
      </p>
    </v-container>
  </section>

  <!-- STEPS — vertical numbered timeline -->
  <section class="steps">
    <v-container class="py-16">
      <div class="timeline">
        <div v-for="n in 5" :key="n" class="timeline-item">
          <div class="timeline-left">
            <div class="timeline-number">{{ n }}</div>
            <div v-if="n < 5" class="timeline-line"></div>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ t(`howItWorksPage.steps.step${n}.title`) }}</h3>
            <p class="timeline-description">{{ t(`howItWorksPage.steps.step${n}.description`) }}</p>
          </div>
        </div>
      </div>
    </v-container>
  </section>

  <!-- WHY PARTNER — icon cards -->
  <section class="why">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-12">
          <h2 class="section-title">{{ t('howItWorksPage.why.title') }}</h2>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="feature-card h-100" elevation="0">
            <v-card-text class="pa-8">
              <div class="feature-icon-wrap mb-5">
                <v-icon color="primary" size="28">mdi-clock-fast</v-icon>
              </div>
              <h3 class="feature-title mb-3">{{ t('howItWorksPage.why.items.timeSaving.title') }}</h3>
              <p class="feature-text">{{ t('howItWorksPage.why.items.timeSaving.description') }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="feature-card h-100" elevation="0">
            <v-card-text class="pa-8">
              <div class="feature-icon-wrap mb-5">
                <v-icon color="primary" size="28">mdi-swap-horizontal-bold</v-icon>
              </div>
              <h3 class="feature-title mb-3">{{ t('howItWorksPage.why.items.flexible.title') }}</h3>
              <p class="feature-text">{{ t('howItWorksPage.why.items.flexible.description') }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="feature-card h-100" elevation="0">
            <v-card-text class="pa-8">
              <div class="feature-icon-wrap mb-5">
                <v-icon color="primary" size="28">mdi-receipt-text-outline</v-icon>
              </div>
              <h3 class="feature-title mb-3">{{ t('howItWorksPage.why.items.transparent.title') }}</h3>
              <p class="feature-text">{{ t('howItWorksPage.why.items.transparent.description') }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- CTA BAND -->
  <section class="closing">
    <v-container class="pb-16">
      <div class="cta-band">
        <h2 class="cta-band-title mb-8">{{ t('howItWorksPage.cta.title') }}</h2>
        <v-btn
          color="primary"
          size="large"
          to="/kapcsolat"
          rounded="lg"
          elevation="0"
          class="px-10"
        >
          {{ t('howItWorksPage.cta.button') }}
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
/* ── Page header ──────────────────────────────── */
.page-header {
  background: #f8f9fe;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
}

.subtitle {
  color: rgba(0, 0, 0, 0.62);
  font-size: 1.1rem;
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── Timeline ─────────────────────────────────── */
.steps {
  background: #ffffff;
}

.timeline {
  max-width: 720px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: 24px;
}

.timeline-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.timeline-number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #22288d;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.timeline-line {
  width: 2px;
  flex: 1;
  min-height: 32px;
  background: #dde1f7;
  margin: 6px 0;
}

.timeline-content {
  padding-bottom: 40px;
  padding-top: 8px;
}

.timeline-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 6px;
}

.timeline-description {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.62);
  line-height: 1.65;
}

/* ── Why section (icon cards) ─────────────────── */
.why {
  background: #f8f9fe;
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

@media (max-width: 960px) {
  .cta-band {
    padding: 48px 24px;
  }

  .cta-band-title {
    font-size: 1.5rem;
  }
}
</style>
