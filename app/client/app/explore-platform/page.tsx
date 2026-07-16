'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

// Define the architecture data structure for the interactive tabs
const ARCHITECTURE_TABS = {
  telemetry: {
    title: '⚡ Real-Time Telemetry Pipeline',
    tag: 'INGESTION & STREAMING',
    shortDesc:
      'How the platform ingests and visualizes high-frequency vital streaming without dropping packets.',
    benefits: [
      'AWS API Gateway WebSocket API handles active connections.',
      'AWS Lambda processes incoming packets against strict JSON schemas.',
      'Amazon DynamoDB stores telemetry with auto-expiring TTL records.',
    ],
    techStack: [
      'AWS Lambda',
      'DynamoDB',
      'API Gateway Websockets',
      'Next.js SSE',
    ],
    codeLabel: 'telemetry-lambda-handler.ts',
    codeLanguage: 'typescript',
    codeSnippet: `import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const ddbClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(ddbClient);

export const handler = async (event: any) => {
  const body = JSON.parse(event.body);
  
  // Enforce schema validation for real-time vitals
  if (!body.patientId || !body.bloodPressure) {
    return { statusCode: 400, body: "Invalid telemetry payload" };
  }

  const telemetryPayload = {
    PartitionKey: \`PATIENT#\${body.patientId}\`,
    SortKey: \`VITAL#\${Date.now()}\`,
    Systolic: body.bloodPressure.systolic,
    Diastolic: body.bloodPressure.diastolic,
    BPM: body.pulse,
    TTL: Math.floor(Date.now() / 1000) + (90 * 24 * 60 * 60) // 90-Day HIPAA Retain
  };

  await docClient.send(new PutCommand({
    TableName: process.env.TELEMETRY_TABLE,
    Item: telemetryPayload
  }));

  return { statusCode: 200, body: JSON.stringify({ status: "STREAMING_ACTIVE" }) };
};`,
  },
  security: {
    title: '🛡️ Zero-Trust Identity & Compliance',
    tag: 'ENCRYPTION & IAM',
    shortDesc:
      'A multi-layered defense model designed to exceed standard HIPAA and SOC2 compliance rules.',
    benefits: [
      'Amazon Cognito User Pools enforce secure MFA and token-based sessions.',
      'AWS KMS customer-managed keys encrypt PII with automated envelope schemes.',
      'Next.js Middleware validates JWT claims at the edge before serving dynamic portals.',
    ],
    techStack: ['Amazon Cognito', 'AWS KMS', 'Next.js Middleware', 'JWT Auth'],
    codeLabel: 'kms-envelope-encryption.tf',
    codeLanguage: 'hcl',
    codeSnippet: `# Cloud-native customer-managed key for patient records
resource "aws_kms_key" "patient_data_key" {
  description             = "KMS Key for HIPAA-compliant AegisCare database storage"
  deletion_window_in_days = 30
  enable_key_rotation     = true

  tags = {
    Environment = "Production"
    Compliance  = "HIPAA-Audit-Aligned"
  }
}

# Restrict KMS usage strictly to authenticated services
resource "aws_kms_key_policy" "strict_compliance_policy" {
  key_id = aws_kms_key.patient_data_key.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "Allow access for App Runner/Fargate Exec role only"
        Effect = "Allow"
        Principal = {
          AWS = "arn:aws:iam::123456789012:role/AegisCareServiceRole"
        }
        Action = [
          "kms:Encrypt",
          "kms:Decrypt",
          "kms:GenerateDataKey"
        ]
        Resource = "*"
      }
    ]
  })
}`,
  },
  infrastructure: {
    title: '☁️ High-Availability Multi-AZ Cluster',
    tag: 'ORCHESTRATION & NETWORKING',
    shortDesc:
      'A reliable network model hosting Next.js frontends and backend servers across distinct geographic zones.',
    benefits: [
      'AWS ECS (Fargate) instances dynamically scale based on load metrics.',
      'Application Load Balancer (ALB) handles routing and terminates TLS 1.3.',
      'Isolated VPC architecture keeps databases tucked inside isolated private subnets.',
    ],
    techStack: [
      'Amazon ECS (Fargate)',
      'Terraform',
      'Application Load Balancer',
      'VPC Routing',
    ],
    codeLabel: 'network-cluster.tf',
    codeLanguage: 'hcl',
    codeSnippet: `# Multi-AZ VPC Definition
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"

  name = "aegiscare-prod-vpc"
  cidr = "10.0.0.0/16"

  # Distribute across 3 Availability Zones for HA
  azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = false # Redundant NAT Gateways to avoid single failure points

  public_subnet_tags = {
    "kubernetes.io/role/elb" = "1"
  }
}`,
  },
}

export default function ExplorePlatform() {
  const [activeTab, setActiveTab] = useState<keyof typeof ARCHITECTURE_TABS>('telemetry')
  const activeData = ARCHITECTURE_TABS[activeTab]

  return (
    <div className='h-screen w-screen bg-slate-50 text-slate-800 flex flex-col justify-between overflow-hidden relative selection:bg-indigo-100 selection:text-indigo-900'>
      {/* SAFE BACKGROUND BLURS */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
        <div className='absolute top-[-10%] left-[-10%] h-[500px] w-[500px] bg-indigo-200/20 blur-[130px] rounded-full' />
        <div className='absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] bg-cyan-200/25 blur-[150px] rounded-full' />
      </div>

      {/* HEADER / NAVIGATION BAR */}
      <header className='w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between z-20 relative shrink-0'>
        <Link
          href='/'
          className='flex items-center gap-3 text-lg font-black tracking-tight text-slate-900'
        >
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-400 via-indigo-500 to-indigo-600 p-[1px] shadow-sm'>
            <span className='flex h-full w-full items-center justify-center rounded-[7px] bg-white text-xs font-black text-indigo-600'>
              Æ
            </span>
          </div>
          AegisCare
        </Link>

        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='/explore-platform'
            className='text-xs font-bold text-indigo-600 transition-colors'
          >
            Explore Platform
          </Link>
          <Link
            href='/learn-more'
            className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'
          >
            Learn More
          </Link>
          <Link
            href='/security-whitepaper'
            className='text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors'
          >
            Security Whitepaper
          </Link>
        </nav>

        <Link
          href='/login'
          className='rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2 text-xs font-black text-slate-700 shadow-sm transition-all'
        >
          Portal Login
        </Link>
      </header>

      {/* MAIN HERO CONTAINER */}
      <main className='w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 z-10 relative overflow-hidden py-6'>
        {/* LEFT COLUMN: Pillar Selector & Details */}
        <div className='flex flex-col justify-between lg:w-[45%] shrink-0 space-y-6 max-w-xl'>
          <div className='space-y-4'>
            {/* Status Badge */}
            <div className='inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 self-start'>
              <span className='w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse' />
              <span className='text-[9px] font-black text-indigo-700 tracking-widest uppercase font-mono'>
                Interactive Sandbox
              </span>
            </div>

            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight'>
              Explore our production <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500'>
                cloud architecture.
              </span>
            </h1>

            <p className='text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md font-medium'>
              Click on each architectural subsystem to view live implementation
              configurations, schema validations, and AWS deployment models.
            </p>
          </div>

          {/* Interactive Interactive Selector Tabs */}
          <div className='space-y-3 flex-grow flex flex-col justify-center max-w-md'>
            {Object.keys(ARCHITECTURE_TABS).map((tabKey) => {
              const tab = ARCHITECTURE_TABS[tabKey as keyof typeof ARCHITECTURE_TABS]
              const isSelected = activeTab === tabKey
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey as keyof typeof ARCHITECTURE_TABS)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-white border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] scale-[1.01]'
                      : 'border-transparent bg-transparent hover:bg-slate-100/60'
                  }`}
                >
                  <div className='flex items-center justify-between'>
                    <span
                      className={`text-[9px] font-black tracking-wider uppercase font-mono ${
                        isSelected ? 'text-indigo-600' : 'text-slate-400'
                      }`}
                    >
                      {tab.tag}
                    </span>
                    {isSelected && (
                      <span className='text-xs text-indigo-600 animate-pulse'>
                        ●
                      </span>
                    )}
                  </div>
                  <h3 className='font-black text-slate-800 text-sm mt-1'>
                    {tab.title}
                  </h3>
                  <p className='text-[11px] text-slate-500 mt-1 leading-normal'>
                    {tab.shortDesc}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Micro Footer Indicator */}
          <div className='hidden lg:block text-[10px] text-slate-400 font-mono tracking-wider'>
            🛡️ ARCHITECTURE REPLICATED IN MULTIPLE AWS REGIONS
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Code Terminal */}
        <div className='flex-grow flex flex-col items-stretch justify-center relative w-full lg:w-[55%] min-h-[400px] lg:min-h-0 py-2'>
          {/* Terminal Box */}
          <div className='w-full h-full flex flex-col bg-slate-950 rounded-3xl border border-slate-800/80 shadow-[0_30px_70px_-15px_rgba(99,102,241,0.2),0_15px_30px_-10px_rgba(0,0,0,0.1)] overflow-hidden font-mono text-xs text-slate-300 relative'>
            {/* Terminal Header Tab bar */}
            <div className='bg-slate-900 border-b border-slate-800/80 px-4 py-3.5 flex items-center justify-between shrink-0 select-none'>
              <div className='flex items-center gap-1.5'>
                <span className='w-2.5 h-2.5 rounded-full bg-rose-500/80' />
                <span className='w-2.5 h-2.5 rounded-full bg-amber-500/80' />
                <span className='w-2.5 h-2.5 rounded-full bg-emerald-500/80' />
              </div>
              <span className='text-[9px] text-slate-500 font-bold tracking-tight flex items-center gap-1.5'>
                📂 infrastructure / {activeData.codeLabel}
              </span>
              <div className='flex items-center gap-1 bg-slate-800 border border-slate-700/50 px-2 py-0.5 rounded text-[8px] font-black tracking-wide text-slate-400 uppercase'>
                {activeData.codeLanguage}
              </div>
            </div>

            {/* Sub-Header showcasing key technical features */}
            <div className='bg-slate-900/40 border-b border-slate-800/40 p-4 shrink-0'>
              <div className='text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2'>
                Subsystem Integration Highlights
              </div>
              <ul className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                  {activeData.techStack.map((tech: string, idx: number) => (
                  <li
                    key={idx}
                    className='bg-indigo-950/30 border border-indigo-500/10 rounded-lg px-2.5 py-1 text-[9px] text-indigo-400 flex items-center gap-1.5'
                  >
                    <span className='w-1 h-1 rounded-full bg-indigo-400' />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Body Content Window */}
            <div className='flex-grow p-5 overflow-auto relative bg-slate-950/70 text-[10.5px] leading-relaxed text-slate-300 select-text'>
              <pre className='whitespace-pre select-text selection:bg-indigo-900/60 selection:text-white'>
                <code>{activeData.codeSnippet}</code>
              </pre>
            </div>

            {/* Quick Benefits Checklist on the bottom of code terminal */}
            <div className='bg-slate-900/60 border-t border-slate-800/80 px-5 py-4 shrink-0'>
              <div className='text-[10px] font-black uppercase tracking-wider text-indigo-400 font-mono mb-2'>
                Infrastructure Assurance Checklist
              </div>
              <div className='space-y-1.5'>
                  {activeData.benefits.map((benefit: string, idx: number) => (
                  <div
                    key={idx}
                    className='flex items-start gap-2 text-[9.5px] text-slate-400 leading-tight'
                  >
                    <span className='text-emerald-400 shrink-0'>✔</span>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
