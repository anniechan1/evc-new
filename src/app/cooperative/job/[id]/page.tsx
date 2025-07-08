import JobDetails from "@/components/jobs/JobDetails"

interface JobPageProps {
  params: {
    id: string
  }
}

export default function JobPage({ params }: JobPageProps) {
  return <JobDetails jobId={params.id} />
}
