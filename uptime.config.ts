// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "lyc8503's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      id: 'foo_monitor',
      name: 'My API Monitor',
      method: 'GET',
      target: 'https://example.com',
      tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://example.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    },

    // Example TCP Monitor
    {
      id: 'test_tcp_monitor',
      name: 'Example TCP Monitor',
      method: 'TCP_PING',
      target: '72.18.80.213:22',
      tooltip: 'My production server SSH',
      statusPageLink: 'https://example.com',
      timeout: 5000,
    },

    // 新增的 2055555.xyz 监控
    {
      id: 'monitor_2055555',
      name: '2055555.xyz',
      method: 'GET',
      target: 'https://2055555.xyz',
      tooltip: '监控 2055555.xyz 首页',
      statusPageLink: 'https://2055555.xyz',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],

  // Notification settings
  notification: {
    webhook: {
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

// Maintenances
const maintenances: MaintenanceConfig[] = [
  {
    monitors: ['foo_monitor', 'bar_monitor'],
    title: 'Test Maintenance',
    body: 'This is a test maintenance, server software upgrade',
    start: '2020-01-01T00:00:00+08:00',
    end: '2050-01-01T00:00:00+08:00',
    color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
