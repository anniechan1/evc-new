import JobDetails from "@/components/jobs/JobDetails"

interface JobPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params
  return <JobDetails jobId={id} />
}
