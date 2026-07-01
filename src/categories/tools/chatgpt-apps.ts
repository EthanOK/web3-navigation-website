import { Category } from "../categories";

const chatgptApps: Category = {
  id: "chatgpt-apps",
  title: "ChatGPT APPS",
  tools: [
    {
      name: "ChatGPT",
      description: "Chat with OpenAI",
      icon: "https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp",
      link: "https://chatgpt.com"
    },
    {
      name: "DeepSeek",
      description: "Chat with DeepSeek AI",
      icon: "/assets/images/deepseek-logo.svg",
      link: "https://chat.deepseek.com"
    },
    {
      name: "Gemini",
      description: "Gemini - chat to supercharge your ideas",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png",
      link: "https://gemini.google.com"
    },
    {
      name: "Grok",
      description: "ChatGPT Plus - ChatGPT powered by OpenAI",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAo0lEQVR4Ac3SEQzEMBTG8b+fO58no3M4l8OzyfSclsyh0GRSmdOsOG+Gh6V6CpN3KTXXtON98uD35Ht5yEkugrNWWwsNEBvogX1s4B3UNNRxhG7nU0UHeAp0ZlnSBEws8QCMSA9PCSWKA8IKxArKBJ0DKyXmDm+pYwDc0cC4ANLAm31BX8cRvsAqjSre1qvkIzwSDn+4KT2nHaWVj0rbS31fzg8b5Jsf3tn0AwAAAABJRU5ErkJggg==",
      link: "https://x.com/i/grok"
    },
    {
      name: "Claude",
      description:
        "Claude is a next generation AI assistant built by Anthropic",
      icon: "/assets/images/claude-icon.png",
      link: "https://claude.ai"
    },
    {
      name: "豆包",
      description:
        "豆包是你的 AI 聊天智能对话问答助手，写作文案翻译情感陪伴编程全能工具",
      icon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/logo-icon-white-bg.png",
      link: "https://www.doubao.com/chat/"
    },
    {
      name: "KIMI",
      description: "Kimi.ai - 会推理解析, 能深度思考的AI助手",
      icon: "https://statics.moonshot.cn/kimi-chat/favicon.ico",
      link: "https://kimi.moonshot.cn"
    },
    {
      name: "通义千问",
      description: "通情、达义, 你的全能AI助手",
      icon: "https://img.alicdn.com/imgextra/i1/O1CN01asLYeX1WhbsyEZn5u_!!6000000002820-55-tps-56-56.svg",
      link: "https://tongyi.aliyun.com/qianwen/"
    },
    {
      name: "智谱清言",
      description: "ChatGLM, 智谱大模型, 中国版chatgpt",
      icon: "data:image/png;base64,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",
      link: "https://chatglm.cn"
    }
  ]
};

export default chatgptApps;
