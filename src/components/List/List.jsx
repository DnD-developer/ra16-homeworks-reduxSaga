//styles
//components
import { List as ListRender } from "antd"

export default function List({ data, children }) {
	return <ListRender itemLayout="vertical" size="small" dataSource={data} renderItem={children} style={{ width: "100%" }} />
}
