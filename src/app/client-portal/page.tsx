import type { Metadata } from "next";
import { InteriorHero } from "@/components/page-parts";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = { title: "Client Portal", description: "Open the secure Financial Groove ShareFile client portal." };
export default function ClientPortalPage() {
  return <><InteriorHero dark eyebrow="Current clients" title="Your secure portal." intro="Upload requested documents and sensitive information through Financial Groove’s ShareFile portal." actions={<a className="button" href={contact.shareFile} target="_blank" rel="noreferrer">Open ShareFile <span aria-hidden="true">↗</span></a>} /><section className="section"><div className="shell split-grid"><div><span className="eyebrow">Before you go</span><h2>Use the secure route.</h2></div><div className="split-copy"><p>The portal opens in a new tab on ShareFile. Sign in with your established client credentials and use the requested folder or upload link.</p><p>If you are having trouble with access, email <a href={contact.emailHref}>{contact.email}</a> without attaching sensitive documents.</p></div></div></section></>;
}
