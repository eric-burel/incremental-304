export const revalidate = 10
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const intl = new Intl.DateTimeFormat("en-US", {dateStyle: "full", timeStyle:"medium"})
  const now = intl.format(Date.now())
  console.log("rendering home:", now)
  return <div>{now}</div>
}
