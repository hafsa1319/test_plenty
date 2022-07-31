import React from "react";
import { useOverrides } from "@quarkly/components";
import EmbedHTML from "./EmbedHTML";
const defaultProps = {};
const overrides = {};

const Hhh = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <EmbedHTML {...rest}>
		{children}
	</EmbedHTML>;
};

Object.assign(Hhh, { ...EmbedHTML,
	defaultProps,
	overrides
});
export default Hhh;