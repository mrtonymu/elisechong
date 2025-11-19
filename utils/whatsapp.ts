// WhatsApp 配置 - 共享配置
// 电话号码格式：国家代码+号码（不带+号和空格）
export const WHATSAPP_PHONE = '60165281564' // 马来西亚：60 + 165281564
export const WHATSAPP_SHORT_LINK = 'https://wa.link/2x0scs' // 备用短链接

export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message)
  
  if (WHATSAPP_PHONE) {
    // 使用 api.whatsapp.com 格式（需要电话号码）
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodedMessage}&type=phone_number&app_absent=0`
    window.open(whatsappUrl, '_blank')
  } else {
    // 使用短链接格式
    const whatsappUrl = `${WHATSAPP_SHORT_LINK}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }
}

