import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Panel({title, Icon, value1, value2}: {title: string, Icon: any, value1: string, value2: string}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2 w-[200px]">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value1}</div>
        <p className="text-xs text-muted-foreground">{value2}</p>
      </CardContent>
    </Card>
  )
}
