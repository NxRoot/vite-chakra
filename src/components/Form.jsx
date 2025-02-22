import { FormControl, Input, FormLabel, Stack, Select, Checkbox, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function Form({ schema, children, ...rest }) {
  return (
    <Stack {...rest}>
      {Object.entries(schema).map(([key, item], index) => {

        if (!item.type) {
          return (
            <FormControl key={index}>
              <FormLabel hidden={!item?.label} htmlFor="" fontSize="xs" color={useColorModeValue("gray.700", "gray.500")}>{item?.label}</FormLabel>
              <Input value={item?.value} autoComplete="off" placeholder={item?.placeholder} onChange={e => item?.onChange(key, e.target.value)} onKeyDown={item?.onKeyDown} />
            </FormControl>
          )
        }

        if (item.type === "search") {
          return (
            <FormControl key={index}>
              <FormLabel htmlFor="" fontSize="xs" color={useColorModeValue("gray.700", "gray.500")}>Text</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none' pr="1">
                  <FiSearch fontSize="20px" />
                </InputLeftElement>
                <Input value={item?.value} autoComplete="off" placeholder="Search..." onChange={e => item?.onChange(key, e.target.value)} onKeyDown={item?.onKeyDown} />
              </InputGroup>
            </FormControl>
          )
        }

        if (item.type === "select") {
          return (
            <FormControl key={index}>
              <FormLabel hidden={!item?.label} htmlFor="" fontSize="xs" color={useColorModeValue("gray.700", "gray.500")}>{item?.label}</FormLabel>
              <Select value={item?.value} autoComplete="off" placeholder={item?.placeholder} onChange={e => item?.onChange(key, e.target.value)}>
                {item?.options?.map(({ key, label }, i) => <option key={i} value={key}>{label}</option>)}
              </Select>
            </FormControl>
          )
        }

        if (item.type === "checkbox") {
          return (
            <FormControl key={index}>
              <FormLabel hidden={!item?.label} htmlFor="" fontSize="xs" color={useColorModeValue("gray.700", "gray.500")}>{item?.label}</FormLabel>
              <Stack spacing={0}>
                {item?.options?.map(({ key, label, value }, i) => (
                  <Checkbox key={i} defaultChecked={value} py="1" onChange={e => item?.onChange(key, e.target.checked)} opacity="0.7" _hover={{ opacity: 1 }} size="lg" w="full" >
                    <div style={{ fontSize: "14.2px" }}>&nbsp;{label} </div>
                  </Checkbox>
                ))}
              </Stack>
            </FormControl>
          )
        }
      })}
      {children}
    </Stack>
  )
}