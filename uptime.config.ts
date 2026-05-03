// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "智教联盟 的服务状态",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
  group: {
    '智教联盟': ['stcn', 'stcn_forum', 'stcn_cnel'],
    'ClassIsland': ['stcn_ci_homepage', 'stcn_ci_docs', 'stcn_ci_distribution']
  }
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      id: 'stcn',
      name: '主页',
      method: 'GET',
      target: 'https://smart-teach.cn',
      statusPageLink: 'https://smart-teach.cn',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'stcn_forum',
      // `name` is used at status page and callback message
      name: '论坛',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://forum.smart-teach.cn',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      //tooltip: '',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://forum.smart-teach.cn',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      //expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      //timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        //Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent (require POST/PUT/PATCH method)
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      // responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://`, `globalping://` and `http(s)://` proxies
      // checkProxy: 'worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      // checkProxyFallback: true,
    },
    {
      id: 'stcn_cnel',
      name: 'CNEL',
      method: 'GET',
      target: 'https://cnel.smart-teach.cn',
      tooltip: 'CNEL 电教委员指南',
      statusPageLink: 'https://cnel.smart-teach.cn',
      headers: {
        'User-Agent': 'Uptimeflare',
      }
    },
    {
      id: 'stcn_ci_homepage',
      name: '主页',
      method: 'GET',
      target: 'https://classisland.tech',
      tooltip: 'ClassIsland 主页',
      statusPageLink: 'https://classisland.tech',
    },
    {
      id: 'stcn_ci_docs',
      name: '文档',
      method: 'GET',
      target: 'https://docs.classisland.tech',
      tooltip: 'ClassIsland 文档',
      statusPageLink: 'https://docs.classisland.tech'
    },
    {
      id: 'stcn_ci_distribution',
      name: '分发服务',
      method: 'GET',
      target: 'https://distribution.classisland.tech',
      tooltip: 'ClassIsland 分发服务',
    },
    // Example TCP Monitor
    /*{
      id: 'test_tcp_monitor',
      name: 'Example TCP Monitor',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '1.2.3.4:22',
      tooltip: 'My production server SSH',
      statusPageLink: 'https://example.com',
      timeout: 5000,
    },*/
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    //monitors: ['foo_monitor', 'bar_monitor'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: '智教联盟服务中断',
    // Description of the maintenance, will be shown at status page
    body: '由于一些已知问题，智教联盟部分服务仍然处于异常状态。\n我们仍在积极处理。',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2026-05-1T08:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    //end: '2050-01-01T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'red',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
