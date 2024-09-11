export const style = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
    maxHeight: "90vh",
  },
  modal_fields: {
    border: "1px solid #28262D",
    borderRadius: "24px",
    backgroundColor: "#0D0C0F",
    padding: "40px",
  },
  box: {
    border: "1px solid #28262D",
    borderRadius: "24px",
    backgroundColor: "#0D0C0F",
  },
  Heading1: {
    fontWeight: "700",
    fontSize: "40px",
  },
  transparent_input: {
    backgroundColor: "transparent",
    border: "1px solid #FFFFFF",
    outline: "none",
    borderRadius: "8px",
    width: "100%",
    marginBottom: "20px", // fixed 'mb' to 'marginBottom'
    "& .MuiInputBase-input": {
      color: "#FFFFFF",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFFFFF",
    },
    "& .MuiInputLabel-root": {
      color: "#FFFFFF",
    },
  },
};