# @pexcode/qds-status-sdk

Shared Vue 3 composables for **package status** and **package events**, with built-in English and Arabic translations. Use it in any Vue + Vite (or Vue 3) project to keep status/event logic and labels in one place.

## Features

- **Package status** – Status codes, labels, colors, and icons (e.g. Waiting, Delivered, In Transit).
- **Package events** – Event codes and labels (e.g. Created, OutForDelivery, PickedUpByClient).
- **Built-in locales** – Static JSON for `en` and `ar`; no vue-i18n required.
- **TypeScript** – Full types exported.

## Installation

Your project must use **Vue 3**.

```bash
npm install @pexcode/qds-status-sdk
```

## Usage

Pass the current language (`'en'` or `'ar'`) into the composables. Labels are resolved from the package’s own locale files.

### Package status

```ts
import {
  usePackageStatus,
  PackageStatus,
  type SupportedLocale,
} from '@pexcode/qds-status-sdk'

const lang: SupportedLocale = 'ar' // or 'en'

const {
  packageStatusList,
  generalPackageStatusList,
  getPackageStatusLabel,
  getPackageStatusColor,
  getPackageStatusIcon,
  PackageStatus,
} = usePackageStatus(lang)

// List with translated labels (for dropdowns, filters, etc.)
packageStatusList.forEach((item) => {
  console.log(item.label, item.color, item.icon)
})

// Single status label/color/icon by value
const label = getPackageStatusLabel(PackageStatus.Delivered)
const color = getPackageStatusColor(PackageStatus.InTransit)
const icon = getPackageStatusIcon(PackageStatus.OutForDelivery)
```

### Package events

```ts
import {
  usePackagesEvent,
  PackageEvent,
  type SupportedLocale,
} from '@pexcode/qds-status-sdk'

const lang: SupportedLocale = 'en'

const {
  packageEventList,
  getPackageEventLabel,
  getPackageEventColor,
  getPackageEventIcon,
  PackageEvent,
} = usePackagesEvent(lang)

const label = getPackageEventLabel(PackageEvent.Created)
const color = getPackageEventColor(PackageEvent.DeliveryFailed)
```

### Use with your app’s locale

If you already have a locale (e.g. from vue-i18n or a ref), pass it in:

```ts
import { useI18n } from 'vue-i18n'
import { usePackageStatus, type SupportedLocale } from '@pexcode/qds-status-sdk'

const { locale } = useI18n()
const lang = computed<SupportedLocale>(() =>
  locale.value === 'ar' ? 'ar' : 'en'
)

const { packageStatusList, getPackageStatusLabel } = usePackageStatus(lang.value)
```

When the locale changes, call the composable again with the new value (or refactor so the composable receives a reactive `lang` and returns reactive data).

## Supported locales

| Code | Language |
|------|----------|
| `en` | English  |
| `ar` | Arabic   |

Type: `SupportedLocale = 'en' | 'ar'`. Default is `'en'` when omitted or invalid.

## Exports

### Types

- `SupportedLocale` – `'en' | 'ar'`
- `PackageStatusType` – status code union
- `PackageStatusLabelType` – status item shape (value, labelKey, label?, color, icon)
- `PackageEventType` – event code union

### Status

- `PackageStatus` – status code constants (e.g. `PackageStatus.Delivered`, `PackageStatus.InTransit`)
- `packageStatusListStatic` – raw status list (no translated labels); use for static data
- `generalStatusList` – grouped statuses (all, pending, delivering, delivered, etc.)
- `usePackageStatus(language?)` – composable returning `packageStatusList` (with labels), helpers, and constants

### Events

- `PackageEvent` – event code constants
- `packageEventList` – list of event definitions
- `usePackagesEvent(language?)` – composable returning helpers and constants

## Build (for package maintainers)

```bash
npm install
npm run build
```

Output is in `dist/`. The `dist` folder is what gets published.

## License

MIT · Pexcode and QuickdeliverySystem
