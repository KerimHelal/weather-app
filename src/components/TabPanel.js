import Box from "@material-ui/core/Box";

const TabPanel = (props) => {
  const { children, value, index, flex, noPadding, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          className={flex ? "space-between" : ""}
          style={noPadding && { padding: 0 }}
          p={3}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
