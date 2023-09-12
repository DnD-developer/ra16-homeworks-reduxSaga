//styles
//components
import { List as ListRender } from "antd"

export default function List({ data, children }) {
	return <ListRender size="small" dataSource={data} renderItem={children} />
}
