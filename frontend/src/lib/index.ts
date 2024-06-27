export type InvokeFunction = (name: string, args: Object) => Promise<void>;
export type Glue = {
	invoke: InvokeFunction;
	subscribe: (callback: InvokeFunction) => Promise<void>;
};

var glue: Glue;

const glueEventHandler = async (name: string, args: Object) => {};
const loadGlue = async () => {
	glue = await import('$shared/glue.js');
	return glue;
};

loadGlue().then(() => {
	glue.subscribe(glueEventHandler);
});

export const invoke = async (name: string, args: Object) => {
	glue.invoke(name, args);
};
