import { Button, Card, Grid, Icon, Typography } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { themeShadows } from "app/components/AdminTheme/themeColors";
import { H1, H3, H4 } from "app/components/Typography";
import React, { useState } from "react";

const PricingCard = styled(Card)(({ theme, plan }) => ({
  display: "flex",
  alignItems: "center",
  padding: "56px 24px",
  flexDirection: "column",
  "& .icon": { fontSize: "72px", marginBottom: "56px" },
  background:
    plan && plan !== "monthly"
      ? theme.palette.secondary.main
      : plan && theme.palette.primary.main,
}));

const PriceBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  marginBottom: "56px",
  "& h1": { fontSize: "48px" },
}));

const ContentBox = styled(Box)(() => ({
  maxWidth: 280,
  display: "flex",
  overflow: "hidden",
  marginBottom: "48px",
  borderRadius: "300px",
  boxShadow: themeShadows[1],
}));

const StyledButton = styled(Button)(({ plan }) => ({
  flexGrow: 1,
  borderRadius: "0px",
  transition: "all 0.3s ease",
  "&:hover": { boxShadow: themeShadows[12] },
  background: plan !== "monthly" && plan !== "annual" && "#fff",
}));

const RoundedButton = styled(Button)(() => ({
  fontSize: "18px",
  overflow: "hidden",
  paddingLeft: "28px",
  paddingRight: "28px",
  borderRadius: "300px",
  transition: "all 0.3s ease",
  "&:hover": { boxShadow: themeShadows[12] },
}));

const SimplePricing2 = () => {
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;
  const textPrimary = palette.primary.main;
  const [plan, setPlan] = useState("annual");

  return (
    <Box mb={7} mx="auto" maxWidth={850}>
      <H1 sx={{ mb: 6, fontSize: 32, textAlign: "center" }}>Simple Pricing</H1>

      <ContentBox mx="auto">
        <StyledButton
          plan={plan}
          onClick={() => setPlan("monthly")}
          variant={plan === "monthly" ? "contained" : "text"}
        >
          Monthly Fees
        </StyledButton>

        <StyledButton
          plan={plan}
          onClick={() => setPlan("annual")}
          variant={plan === "annual" ? "contained" : "text"}
        >
          Annual Fees
        </StyledButton>
      </ContentBox>

      <div>
        <Grid container spacing={3}>
          <Grid item md={4} sm={12} xs={12}>
            <Card sx={{ p: 3, height: "100%" }}>
              <H3 sx={{ mb: 4, color: textMuted, textTransform: "capitalize" }}>
                {plan} Product Pricing
              </H3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tempus vestibulum vestibulum. Nunc nec feugiat ligula. In porta
                feugiat purus et ornare.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tempus vestibulum vestibulum. Nunc nec feugiat ligula. In porta
                feugiat purus et ornare.Integer tempor, sapien scelerisque
                commodo molestie, ante lacus dapibus ligula
              </p>
            </Card>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <PricingCard elevation={3}>
              <Icon sx={{ color: textPrimary }} className="icon">
                flight
              </Icon>

              <H4 sx={{ mb: "20px", fontSize: "22px" }}>Startup</H4>

              <PriceBox>
                <Box display="flex">
                  <Typography component="b" mr="4px" mt="6px">
                    $
                  </Typography>
                  <H1>{plan === "monthly" ? 75 : 75 * 11}</H1>
                </Box>

                <Typography
                  ml="4px"
                  mb="4px"
                  component="b"
                  fontSize="16px"
                  color={textMuted}
                >
                  /{plan === "monthly" ? "month" : "year"}
                </Typography>
              </PriceBox>

              <RoundedButton
                sx={{
                  "&:hover": {
                    color: "#ffffff",
                    background: `${palette.secondary.main} !important`,
                  },
                }}
                variant="outlined"
                color="secondary"
              >
                Purchase
              </RoundedButton>
            </PricingCard>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <PricingCard plan={plan} elevation={3} sx={{ color: "#fff" }}>
              <Icon className="icon">apartment</Icon>
              <H4 sx={{ mb: "20px", fontSize: "22px" }}>Enterprise</H4>

              <PriceBox>
                <Box display="flex">
                  <Typography component="b" mr="4px" mt="6px">
                    $
                  </Typography>
                  <H1>{plan === "monthly" ? 775 : 775 * 11}</H1>
                </Box>
                <Typography ml="4px" mb="4px" component="b" fontSize="16px">
                  /{plan === "monthly" ? "month" : "year"}
                </Typography>
              </PriceBox>

              <RoundedButton
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
              >
                Purchase
              </RoundedButton>
            </PricingCard>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default SimplePricing2;
