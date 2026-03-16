import { Download, Monitor, Smartphone, Apple, Chrome } from "lucide-react";
import { useState } from "react";

export default function Downloads() {
  const [activeTab, setActiveTab] = useState("windows");

  const tabs = [
    { id: "windows", label: "Windows", icon: Monitor },
    { id: "mac", label: "macOS", icon: Apple },
    { id: "android", label: "Android", icon: Smartphone },
    { id: "chrome", label: "Chrome Extension", icon: Chrome },
  ];

  const downloads = {
    windows: [
      { name: "MPreg Setup (64-bit)", version: "v2.4.1", size: "89.2 MB", url: "#windows-64" },
      { name: "MPreg Setup (32-bit)", version: "v2.4.1", size: "76.5 MB", url: "#windows-32" },
      { name: "Portable Version", version: "v2.4.1", size: "92.1 MB", url: "#windows-portable" },
    ],
    mac: [
      { name: "MPreg for macOS (Apple Silicon)", version: "v2.4.1", size: "95.3 MB", url: "#mac-arm" },
      { name: "MPreg for macOS (Intel)", version: "v2.4.1", size: "97.8 MB", url: "#mac-intel" },
      { name: "Universal Build", version: "v2.4.1", size: "112.4 MB", url: "#mac-universal" },
    ],
    android: [
      { name: "MPreg APK", version: "v2.4.0", size: "45.2 MB", url: "#android-apk" },
      { name: "Google Play Store", version: "Latest", size: "Varies", url: "#android-play" },
      { name: "Beta Version APK", version: "v2.5.0-beta", size: "48.1 MB", url: "#android-beta" },
    ],
    chrome: [
      { name: "MPreg Chrome Extension", version: "v1.2.3", size: "12.4 MB", url: "#chrome-extension" },
      { name: "Chrome Web Store", version: "Latest", size: "Varies", url: "#chrome-store" },
      { name: "Beta Extension", version: "v1.3.0-beta", size: "13.1 MB", url: "#chrome-beta" },
    ],
  };

  return (
    <div className="h-full overflow-y-auto bg-background relative">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Downloads</h1>
          <p className="text-xl text-muted-foreground">
            Get MPreg on all your devices
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Download Items */}
        <div className="space-y-4">
          {downloads[activeTab as keyof typeof downloads].map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>Version: {item.version}</span>
                    <span>•</span>
                    <span>Size: {item.size}</span>
                  </div>
                </div>
                <a
                  href={item.url}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* System Requirements */}
        <div className="mt-12 p-6 bg-card border border-border rounded-xl">
          <h3 className="text-lg font-semibold mb-3">System Requirements</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">Minimum</h4>
              <ul className="space-y-1">
                <li>• OS: Windows 10 / macOS 10.15 / Android 8.0</li>
                <li>• RAM: 4 GB</li>
                <li>• Storage: 500 MB available space</li>
                <li>• Internet: Broadband connection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Recommended</h4>
              <ul className="space-y-1">
                <li>• OS: Windows 11 / macOS 13+ / Android 12+</li>
                <li>• RAM: 8 GB or more</li>
                <li>• Storage: 1 GB available space</li>
                <li>• Internet: High-speed broadband</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}