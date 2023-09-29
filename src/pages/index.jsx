import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Thom Le - Software Engineer and Project Manager
        </title>
        <meta
          name="description"
          content="/"
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.thomle.dev/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Thom Le - Software Engineer and Project Manager"/>
        <meta property="og:description" content="/"/>
        <meta property="og:image" content="https://www.thomle.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.117f504c.jpg&w=1080&q=75"/>

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="thomle.dev"/>
        <meta property="twitter:url" content="https://www.thomle.dev/"/>
        <meta name="twitter:title" content="Thom Le - Software Engineer and Project Manager"/>
        <meta name="twitter:description" content="/"/>
        <meta name="twitter:image" content="https://www.thomle.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.117f504c.jpg&w=1080&q=75"/>

      {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      </Head>

      <Container className="mt-9">
      
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer and Project Manager.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Thom, a Software Engineer and Project Manager based Savannah, GA. I started coding in 2021 and have since completed a full stack web development bootcamp and internship with a software engineering firm. I enjoy coding unique websites, building useful applications, and continuously learning about new technologies . When I’m not coding, I work remotely as a Project Manager for a large environmental and civil engineering firm, Atlas Technical Consultants LLC.  
          </p>
          <Button className="group mt-6 w-full">
            <a href="Thom Le-Resume.pdf" download>Download Resume</a>
            <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
          </Button>

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/vietthom"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/vietthom"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/thom-le-b87056138/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
          
        </div>
      </Container>
      
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
          </div>
        </div>
      </Container>
    </> 
  )
}