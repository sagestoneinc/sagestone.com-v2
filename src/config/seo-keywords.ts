export const seoKeywords: Record<string, string> = {
  "/": "virtual assistant services",
  "/solutions": "outsourced business support solutions",
  "/business-operations-support": "business operations support services",
  "/ecommerce-virtual-assistant": "ecommerce virtual assistant services",
  "/gohighlevel-virtual-assistant": "GoHighLevel virtual assistant services",
  "/web-maintenance-support": "website maintenance support services",
  "/customer-support-outsourcing": "customer support outsourcing services",
  "/about": "SageStone Inc",
  "/experience": "SageStone experience",
  "/blog": "virtual assistant and operations insights",
  "/virtual-assistant-services": "dedicated virtual assistant support",
  "/why-philippines": "outsourcing to the Philippines",
  "/industries": "virtual assistant industry solutions",
  "/case-studies": "virtual assistant case studies",
  "/faq": "virtual assistant services FAQ",
  "/contact": "virtual assistant consultation",
  "/blog/how-to-hire-a-virtual-assistant": "how to hire a virtual assistant",
  "/blog/what-does-an-ecommerce-virtual-assistant-do": "what does an ecommerce virtual assistant do",
};

export function normalizeKeyword(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}
