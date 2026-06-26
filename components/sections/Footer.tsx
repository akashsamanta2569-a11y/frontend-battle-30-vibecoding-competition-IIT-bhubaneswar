import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Text } from '@/components/ui/text';

const footerLinks = [
  { title: 'Product', links: ['Features', 'Workflow', 'Pricing'] },
  { title: 'Company', links: ['About', 'Careers', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] }
];

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/50 py-10">
      <Container className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-expedition text-sm font-semibold text-arctic">N</span>
            <span className="text-base font-semibold tracking-tight text-noir">Northstar AI</span>
          </div>
          <Text className="mt-4 text-sm">Premium workflow orchestration for ambitious teams that want calm, intelligent execution.</Text>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-noir/70">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-noir/70 transition-colors duration-200 hover:text-noir">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mt-8 border-t border-white/70 pt-6">
        <Text className="text-sm">© 2026 Northstar AI. All rights reserved.</Text>
      </Container>
    </footer>
  );
}
