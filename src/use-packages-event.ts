import { getLabel, type SupportedLocale } from "./locales";

export const PackageEvent = {
  Unknown: 0,
  Pending: 1,
  Waiting: 2,
  ConfirmedByEmployee: 3,
  MarkedAsDone: 4,
  CanceledByAdmin: 5,
  CanceledByClient: 6,
  ReceivedByEmployee: 7,
  CanceledByEmployee: 8,
  ReportedByEmployee: 9,
  ReportedByAdmin: 10,
  ReportedByClient: 11,
  ReportedByApi: 12,
  Redirected: 13,
  Transferred: 14,
  MarkedAsReturned: 15,
  ReceivedByEndpointCenter: 16,
  DoneByEndpointCenter: 17,
  ReturnedByEndpointCenter: 18,
  Created: 19,

  // New Events
  ProcessingStarted: 20,
  OutForDelivery: 21,
  DeliveryFailed: 22,
  Hold: 23,
  HoldResolved: 24,
  LostReported: 25,
  DamagedReported: 26,
  CustomsHold: 27,
  CustomsReleased: 28,
  PickupReady: 29,
  PickedUpByClient: 30,
  Updated: 40,

  ReceiverChanged: 50,
  ReceiverUpdated: 51,

  // todo check if repet
  NotAnswer: 200,
  Deceitful: 210,
  NotReceived: 220,
  ClientNotFound: 230,
} as const;

export type PackageEventType = (typeof PackageEvent)[keyof typeof PackageEvent];

type PackageEventLabelType = {
  value: PackageEventType;
  labelKey: string;
  color: string;
  icon: string;
};

export const packageEventList: PackageEventLabelType[] = [
  {
    value: PackageEvent.Pending,
    labelKey: "packages.events.Pending",
    color: "#FFC107",
    icon: "tabler:hourglass",
  },
  {
    value: PackageEvent.Waiting,
    labelKey: "packages.events.Waiting",
    color: "#FFEB3B",
    icon: "tabler:clock",
  },
  {
    value: PackageEvent.ConfirmedByEmployee,
    labelKey: "packages.events.ConfirmedByEmployee",
    color: "#4CAF50",
    icon: "tabler:check",
  },
  {
    value: PackageEvent.MarkedAsDone,
    labelKey: "packages.events.MarkedAsDone",
    color: "#4CAF50",
    icon: "tabler:circle-check",
  },
  {
    value: PackageEvent.CanceledByAdmin,
    labelKey: "packages.events.CanceledByAdmin",
    color: "#F44336",
    icon: "tabler:ban",
  },
  {
    value: PackageEvent.CanceledByClient,
    labelKey: "packages.events.CanceledByClient",
    color: "#F44336",
    icon: "tabler:ban",
  },
  {
    value: PackageEvent.ReceivedByEmployee,
    labelKey: "packages.events.ReceivedByEmployee",
    color: "#2196F3",
    icon: "tabler:truck-delivery",
  },
  {
    value: PackageEvent.CanceledByEmployee,
    labelKey: "packages.events.CanceledByEmployee",
    color: "#E53935",
    icon: "tabler:truck-off",
  },
  {
    value: PackageEvent.ReportedByEmployee,
    labelKey: "packages.events.ReportedByEmployee",
    color: "#FF7043",
    icon: "tabler:arrow-back-up",
  },
  {
    value: PackageEvent.ReportedByAdmin,
    labelKey: "packages.events.ReportedByAdmin",
    color: "#9C27B0",
    icon: "tabler:alert-triangle",
  },
  {
    value: PackageEvent.ReportedByClient,
    labelKey: "packages.events.ReportedByClient",
    color: "#673AB7",
    icon: "tabler:alert-octagon",
  },
  {
    value: PackageEvent.ReportedByApi,
    labelKey: "packages.events.ReportedByApi",
    color: "#3F51B5",
    icon: "tabler:alert-circle",
  },
  {
    value: PackageEvent.Redirected,
    labelKey: "packages.events.Redirected",
    color: "#00BCD4",
    icon: "tabler:arrows-transfer-up",
  },
  {
    value: PackageEvent.Transferred,
    labelKey: "packages.events.Transferred",
    color: "#009688",
    icon: "tabler:map-pin-transfer",
  },
  {
    value: PackageEvent.MarkedAsReturned,
    labelKey: "packages.events.MarkedAsReturned",
    color: "#FF9800",
    icon: "tabler:package-return",
  },
  {
    value: PackageEvent.ReceivedByEndpointCenter,
    labelKey: "packages.events.ReceivedByEndpointCenter",
    color: "#795548",
    icon: "tabler:building-warehouse",
  },
  {
    value: PackageEvent.DoneByEndpointCenter,
    labelKey: "packages.events.DoneByEndpointCenter",
    color: "#4CAF50",
    icon: "tabler:circle-check-filled",
  },
  {
    value: PackageEvent.ReturnedByEndpointCenter,
    labelKey: "packages.events.ReturnedByEndpointCenter",
    color: "#FFB300",
    icon: "tabler:package-return-up",
  },
  {
    value: PackageEvent.Created,
    labelKey: "packages.events.Created",
    color: "#4da314ff",
    icon: "tabler:plus",
  },
  {
    value: PackageEvent.ProcessingStarted,
    labelKey: "packages.events.ProcessingStarted",
    color: "#2196F3",
    icon: "tabler:loader",
  },
  {
    value: PackageEvent.OutForDelivery,
    labelKey: "packages.events.OutForDelivery",
    color: "#00BCD4",
    icon: "tabler:moped",
  },
  {
    value: PackageEvent.DeliveryFailed,
    labelKey: "packages.events.DeliveryFailed",
    color: "#FF5722",
    icon: "tabler:truck-off",
  },
  {
    value: PackageEvent.Hold,
    labelKey: "packages.events.Hold",
    color: "#FFC107",
    icon: "tabler:hand-stop",
  },
  {
    value: PackageEvent.HoldResolved,
    labelKey: "packages.events.HoldResolved",
    color: "#4CAF50",
    icon: "tabler:hand-rock",
  },
  {
    value: PackageEvent.LostReported,
    labelKey: "packages.events.LostReported",
    color: "#616161",
    icon: "tabler:map-off",
  },
  {
    value: PackageEvent.DamagedReported,
    labelKey: "packages.events.DamagedReported",
    color: "#B71C1C",
    icon: "tabler:box-off",
  },
  {
    value: PackageEvent.CustomsHold,
    labelKey: "packages.events.CustomsHold",
    color: "#3F51B5",
    icon: "tabler:file-invoice",
  },
  {
    value: PackageEvent.CustomsReleased,
    labelKey: "packages.events.CustomsReleased",
    color: "#4CAF50",
    icon: "tabler:file-check",
  },
  {
    value: PackageEvent.PickupReady,
    labelKey: "packages.events.PickupReady",
    color: "#8BC34A",
    icon: "tabler:door-exit",
  },
  {
    value: PackageEvent.PickedUpByClient,
    labelKey: "packages.events.PickedUpByClient",
    color: "#4CAF50",
    icon: "tabler:user-check",
  },
  {
    value: PackageEvent.Updated,
    labelKey: "packages.events.Updated",
    color: "#9E9E9E",
    icon: "tabler:pencil",
  },
  {
    value: PackageEvent.ClientNotFound,
    labelKey: "packages.events.ClientNotFound",
    color: "#F44336",
    icon: "tabler:map-pin-off",
  },
  {
    value: PackageEvent.NotReceived,
    labelKey: "packages.events.NotReceived",
    color: "#F44336",
    icon: "tabler:package-off",
  },
  {
    value: PackageEvent.NotAnswer,
    labelKey: "packages.events.NotAnswer",
    color: "#FF5722",
    icon: "tabler:phone-off",
  },
  {
    value: PackageEvent.Deceitful,
    labelKey: "packages.events.Deceitful",
    color: "#B71C1C",
    icon: "tabler:alert-octagon-filled",
  },

  {
    value: PackageEvent.ReceiverChanged,
    labelKey: "packages.events.ReceiverChanged",
    color: "#FFB300",
    icon: "tabler:pencil",
  },

  {
    value: PackageEvent.ReceiverUpdated,
    labelKey: "packages.events.ReceiverUpdated",
    color: "#FFB300",
    icon: "tabler:pencil",
  },
] as const;

export function usePackagesEvent(language?: SupportedLocale) {
  const t = (key: string) => getLabel(language, key);

  const UNKNOWN_STATUS: PackageEventLabelType = {
    value: PackageEvent.Unknown,
    labelKey: "packages.events.unknown",
    color: "#9E9E9E",
    icon: "tabler:question-mark",
  };

  const StatusDetailsMap = new Map<
    PackageEventType | 0,
    PackageEventLabelType
  >();
  packageEventList.forEach((detail) => {
    StatusDetailsMap.set(detail.value, detail);
  });
  StatusDetailsMap.set(PackageEvent.Unknown, UNKNOWN_STATUS);

  const getStatus = (value?: number): PackageEventLabelType => {
    const code = (value as PackageEventType) || PackageEvent.Unknown;

    return StatusDetailsMap.get(code) || UNKNOWN_STATUS;
  };

  const getPackageEventLabel = (value?: number): string => {
    const status = getStatus(value);
    return t(status.labelKey);
  };

  const getPackageEventColor = (value?: number): string => {
    const status = getStatus(value);
    return status.color;
  };

  const getPackageEventIcon = (value?: number): string => {
    const status = getStatus(value);
    return status.icon;
  };
  return {
    getPackageEventLabel,
    getPackageEventColor,
    getPackageEventIcon,
    PackageEvent,
    packageEventList,
  };
}
