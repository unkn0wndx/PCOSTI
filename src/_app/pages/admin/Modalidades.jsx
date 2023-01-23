import { Alert } from "@mui/material"
import { url } from "../../../config"
import { useFetch } from "../../../hook"
import { MesaDeTrabajoMo } from "./components"

export const Modalidades = () => {

  const { data, isLoading, hasError } = useFetch(`${url}/api/getModalidades`)

  const { message } = data;

  return (
    <>
      {/* <MesaDeTrabajoMo message={message} /> */}
    </>
  )
}
