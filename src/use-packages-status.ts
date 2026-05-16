import { getLabel, type SupportedLocale } from "./locales";

// don't touch this object
export const PackageStatus = {
  Unknown: 0,
  Waiting: 1,
  Pending: 2,
  Canceled: 10,
  Delivered: 20,
  Returned: 30,
  Processing: 40,
  InTransit: 50,
  OutForDelivery: 60,
  FailedDelivery: 70,
  OnHold: 80,
  Lost: 90,
  Damaged: 100,
  InCustoms: 110,
  ReadyForPickup: 120,
} as const;

export type PackageStatusType =
  (typeof PackageStatus)[keyof typeof PackageStatus];

export type PackageStatusLabelType = {
  value: PackageStatusType;
  labelKey: string;
  label?: string;
  color: string;
  icon: string;
};

export const packageStatusListStatic: PackageStatusLabelType[] = [
  {
    value: PackageStatus.Waiting,
    labelKey: "packages.PackageStatus.Waiting",
    color: "#FFC107", // Gold/Yellow
    icon: "tabler:hourglass",
  },
  {
    value: PackageStatus.Pending,
    labelKey: "packages.PackageStatus.Pending",
    color: "#FFC107", // Gold/Yellow
    icon: "tabler:hourglass",
  },
  {
    value: PackageStatus.Canceled,
    labelKey: "packages.PackageStatus.Canceled",
    color: "#F44336", // Red
    icon: "tabler:x-circle",
  },
  {
    value: PackageStatus.Delivered,
    labelKey: "packages.PackageStatus.Delivered",
    color: "#4CAF50", // Green
    icon: "tabler:check",
  },
  {
    value: PackageStatus.Returned,
    labelKey: "packages.PackageStatus.Returned",
    color: "#9C27B0", // Purple
    icon: "tabler:refresh-alert",
  },
  {
    value: PackageStatus.Processing,
    labelKey: "packages.PackageStatus.Processing",
    color: "#2196F3", // Blue
    icon: "tabler:settings",
  },
  {
    value: PackageStatus.InTransit,
    labelKey: "packages.PackageStatus.InTransit",
    color: "#607D8B", // Blue Gray
    icon: "tabler:truck",
  },
  {
    value: PackageStatus.OutForDelivery,
    labelKey: "packages.PackageStatus.OutForDelivery",
    color: "#00BCD4", // Cyan
    icon: "tabler:package-export",
  },
  {
    value: PackageStatus.FailedDelivery,
    labelKey: "packages.PackageStatus.FailedDelivery",
    color: "#FF9800", // Orange
    icon: "tabler:alert-triangle",
  },
  {
    value: PackageStatus.OnHold,
    labelKey: "packages.PackageStatus.OnHold",
    color: "#795548", // Brown
    icon: "tabler:hand-stop",
  },
  {
    value: PackageStatus.Lost,
    labelKey: "packages.PackageStatus.Lost",
    color: "#616161", // Dark Gray
    icon: "tabler:map-off",
  },
  {
    value: PackageStatus.Damaged,
    labelKey: "packages.PackageStatus.Damaged",
    color: "#C62828", // Dark Red
    icon: "tabler:box-off",
  },
  {
    value: PackageStatus.InCustoms,
    labelKey: "packages.PackageStatus.InCustoms",
    color: "#3F51B5", // Indigo
    icon: "tabler:file-invoice",
  },
  {
    value: PackageStatus.ReadyForPickup,
    labelKey: "packages.PackageStatus.ReadyForPickup",
    color: "#8BC34A", // Light Green
    icon: "tabler:door-exit",
  },
];

type GeneralStatusValue =
  | "all"
  | "pending"
  | "delivering"
  | "delivered"
  | "canceled"
  | "returned"
  | "reported";

type GeneralStatus = {
  labelKey: string;
  value: GeneralStatusValue;
  children: PackageStatusType[];
  icon: string;
};

export const generalStatusList: GeneralStatus[] = [
  {
    labelKey: "packages.PackageStatus.All",
    value: "all",
    children: packageStatusListStatic.map((s) => s.value),
    icon: "tabler:box",
  },
  {
    labelKey: "packages.PackageStatus.Pending",
    value: "pending",
    children: [PackageStatus.Pending,PackageStatus.Waiting],
    icon: "tabler:clock-hour-4",
  },
  {
    labelKey: "packages.PackageStatus.Delivering",
    value: "delivering",
    children: [PackageStatus.InTransit, PackageStatus.OutForDelivery],
    icon: "tabler:arrows-transfer-up",
  },
  {
    labelKey: "packages.PackageStatus.Delivered",
    value: "delivered",
    children: [PackageStatus.Delivered],
    icon: "tabler:check",
  },
  {
    labelKey: "packages.PackageStatus.Canceled",
    value: "canceled",
    children: [
      PackageStatus.Canceled,
      PackageStatus.FailedDelivery,
      PackageStatus.Lost,
      PackageStatus.Damaged,
    ],
    icon: "tabler:x",
  },
  {
    labelKey: "packages.PackageStatus.Returned",
    value: "returned",
    children: [PackageStatus.Returned],
    icon: "mdi:redo-variant",
  },
  {
    labelKey: "packages.PackageStatus.Reported",
    value: "reported",
    children: [PackageStatus.OnHold, PackageStatus.InCustoms],
    icon: "tabler:alert-triangle",
  },
] as const;

export function usePackageStatus(language?: SupportedLocale) {
  const t = (key: string) => getLabel(language, key);

  const UNKNOWN_STATUS: PackageStatusLabelType = {
    value: PackageStatus.Unknown,
    labelKey: "packages.PackageStatus.Unknown",
    color: "#9E9E9E",
    icon: "tabler:question-mark",
  };

  const StatusDetailsMap = new Map<
    PackageStatusType | 0,
    PackageStatusLabelType
  >();
  packageStatusListStatic.forEach((detail) => {
    StatusDetailsMap.set(detail.value, {
      ...detail,
      label: t(detail.labelKey),
    });
  });
  StatusDetailsMap.set(0, {
    ...UNKNOWN_STATUS,
    label: t(UNKNOWN_STATUS.labelKey),
  });

  const getStatus = (value?: number): PackageStatusLabelType => {
    const code = (value as PackageStatusType) || PackageStatus.Unknown;

    return (
      StatusDetailsMap.get(code) ?? {
        ...UNKNOWN_STATUS,
        label: t(UNKNOWN_STATUS.labelKey),
      }
    );
  };

  const getPackageStatusLabel = (value?: number): string => {
    const status = getStatus(value);
    return t(status.labelKey);
  };

  const getPackageStatusColor = (value?: number): string => {
    const status = getStatus(value);
    return status.color;
  };

  const getPackageStatusIcon = (value?: number): string => {
    const status = getStatus(value);
    return status.icon;
  };

  const generalPackageStatusList = generalStatusList.map((status) => ({
    ...status,
    label: t(status.labelKey),
  }));

  const packageStatusListWithLabels = packageStatusListStatic.map((detail) => ({
    ...detail,
    label: t(detail.labelKey),
  }));

  return {
    packageStatusList: packageStatusListWithLabels,
    PackageStatus,
    generalPackageStatusList,
    getPackageStatusLabel,
    getPackageStatusColor,
    getPackageStatusIcon,
  };
}
