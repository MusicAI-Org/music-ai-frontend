/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledContainer } from "../Global/styles/styles";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Spinner,
  useTheme,
} from "@chakra-ui/react";
import Footer from "../../utils/Footer/Footer";
import useGeoLocation from "../../utils/useGeolocation";
import TextContainer from "../../utils/Texts/TextContainer";
import { createModel } from "../../../pages/api/create-model-api";

const initialValues = {
  Name: "",
  Password: "",
  DoB: "",
  PhNo: "",
  Genre_1: "",
  Genre_2: "",
  Genre_3: "",
  Genre_4: "",
  AvatarName: "",
  AvatarImageURL: "",
  Address: "",
};

const CreateRoleContainer = (): JSX.Element => {
  const { user } = useAuth0();
  const theme = useTheme();
  const location = useGeoLocation();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const genreArray = ["Romantic", "Rock", "Hip Hop", "Jazz"];
  const styles = {
    input: {
      color: theme.colors.white,
      alignSelf: "center",
      width: "100%",
      padding: theme.space[2],
      borderRadius: theme.borderRadius.md,
    },
    pinInput: {
      width: "100%",
      height: "50%",
      fontSize: theme.fontSizes.h2,
      border: `1px solid ${theme.colors.ciDark}`,
      color: theme.colors.white,
      padding: theme.space[2],
    },
    labels: {
      color: theme.colors.ci,
    },
    formControl: {
      marginBottom: theme.space[5],
    },
    inputLeftAddon: {
      width: "8%",
      backgroundColor: theme.colors.bgInput,
      padding: theme.space[2],
      color: theme.colors.ciDark,
      borderRadius: `${theme.borderRadius.md} 0  0 ${theme.borderRadius.md}`,
    },
  };

  useEffect(() => {
    if (location.loaded && location.coordinates) {
      setLatitude(location.coordinates.latitude);
      setLongitude(location.coordinates.longitude);
    }
  }, [location]);

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      Name: Yup.string().required("*Required"),
      Password: Yup.string().required("*Required"),
      DoB: Yup.string().required("*Required"),
      PhNo: Yup.string().required("*Required"),
      Genre_1: Yup.string().required("*Required"),
      Genre_2: Yup.string().required("*Required"),
      Genre_3: Yup.string().required("*Required"),
      Genre_4: Yup.string().required("*Required"),
      AvatarName: Yup.string().required("*Required"),
      AvatarImageURL: Yup.string().required("*Required"),
      Address: Yup.string().required("*Required"),
    }),
    onSubmit: async (values, actions) => {
      console.log("values ", values);
      setIsLoading(true);
      try {
        const data = await createModel({
          name: values.Name,
          role: "Novice",
          yearOfJoining: new Date().getFullYear(),
          dateOfBirth: values.DoB,
          avatarName: values.AvatarName,
          email: user?.email,
          password: values.Password,
          genre: [
            values.Genre_1,
            values.Genre_2,
            values.Genre_3,
            values.Genre_4,
          ],
          avatarImg: values.AvatarImageURL,
          phoneNumber: values.PhNo,
          address: values.Address,
          location: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
        });
        console.log("data ", data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <StyledContainer color={""}>
      <Flex
        height={"90vh"}
        minH={"90vh"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={theme.space[4]}
        paddingLeft={theme.space[9]}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Flex
            width={"48%"}
            height={"100%"}
            justifyContent={"space-around"}
            alignItems={"center"}
            direction={"column"}
            padding={theme.space[5]}
            color={theme.colors.white}
          >
            <FormControl
              style={styles.formControl}
              isInvalid={errors.Name == "Required" && touched.Name}
            >
              <FormLabel style={styles.labels}>Name</FormLabel>
              <Input
                placeholder="Enter Your Name"
                name="Name"
                style={styles.input}
                _focus={{
                  border: `1px solid ${theme.colors.ci}`,
                }}
                _placeholder={{
                  color: theme.colors.ciTrans15,
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Name}
              />
              <TextContainer
                color={theme.colors.danger}
                size={"1rem"}
                text={errors.Name || ""}
              />
            </FormControl>
            <FormControl
              style={styles.formControl}
              isInvalid={errors.Password == "Required" && touched.Password}
            >
              <FormLabel style={styles.labels}>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  name="Password"
                  style={styles.input}
                  _focus={{
                    border: `1px solid ${theme.colors.ci}`,
                  }}
                  _placeholder={{
                    color: theme.colors.ciTrans15,
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Password}
                />
                <InputRightElement width="4.5rem" height="100%">
                  <Button
                    h="0.4rem"
                    size="sm"
                    onClick={handleClick}
                    style={{
                      height: "50%",
                      width: "100%",
                      backgroundColor: theme.colors.transparent,
                      padding: theme.space[1],
                      fontSize: theme.fontSizes.h4,
                      alignSelf: "center",
                      marginRight: theme.space[3],
                    }}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <TextContainer
                color={theme.colors.danger}
                size={"1rem"}
                text={errors.Password || ""}
              />
            </FormControl>
            <FormControl
              style={styles.formControl}
              isInvalid={errors.DoB == "Required" && touched.DoB}
            >
              <FormLabel style={styles.labels}>Date of Birth</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                name="DoB"
                style={styles.input}
                _focus={{
                  border: `1px solid ${theme.colors.ci}`,
                }}
                _placeholder={{
                  color: theme.colors.ciTrans15,
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.DoB}
              />
              <TextContainer
                color={theme.colors.danger}
                size={"1rem"}
                text={errors.DoB || ""}
              />
            </FormControl>
            <FormControl
              style={styles.formControl}
              isInvalid={errors.PhNo == "Required" && touched.PhNo}
            >
              <FormLabel style={styles.labels}>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+91" style={styles.inputLeftAddon} />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  name="PhNo"
                  style={styles.input}
                  _focus={{
                    border: `1px solid ${theme.colors.ci}`,
                  }}
                  _placeholder={{
                    color: theme.colors.ciTrans15,
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.PhNo}
                />
              </InputGroup>
              <TextContainer
                color={theme.colors.danger}
                size={"1rem"}
                text={errors.PhNo || ""}
              />
            </FormControl>
            <FormControl
              style={styles.formControl}
              isInvalid={
                (errors.Genre_1 == "Required" ||
                  errors.Genre_2 == "Required" ||
                  errors.Genre_3 == "Required" ||
                  errors.Genre_4 == "Required") &&
                (touched.Genre_1 ||
                  touched.Genre_2 ||
                  touched.Genre_3 ||
                  touched.Genre_4)
              }
            >
              <FormLabel color={theme.colors.ci} style={styles.labels}>
                GENRE
              </FormLabel>
              <HStack
                width="100%"
                height="fit-content"
                marginTop={theme.space[3]}
              >
                <Flex direction="column" width="100%">
                  <Input
                    style={styles.pinInput}
                    textAlign="center"
                    _placeholder={{
                      color: theme.colors.ciTrans15,
                    }}
                    placeholder={genreArray[0]}
                    name={"Genre_1"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Genre_1}
                  />
                  <TextContainer
                    color={theme.colors.danger}
                    size={"1rem"}
                    text={errors.Genre_1 || ""}
                  />
                </Flex>
                <Flex direction="column" width="100%">
                  <Input
                    style={styles.pinInput}
                    textAlign="center"
                    _placeholder={{
                      color: theme.colors.ciTrans15,
                    }}
                    placeholder={genreArray[1]}
                    name={"Genre_2"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Genre_2}
                  />
                  <TextContainer
                    color={theme.colors.danger}
                    size={"1rem"}
                    text={errors.Genre_2 || ""}
                  />
                </Flex>
                <Flex direction="column" width="100%">
                  <Input
                    style={styles.pinInput}
                    textAlign="center"
                    _placeholder={{
                      color: theme.colors.ciTrans15,
                    }}
                    placeholder={genreArray[2]}
                    name={"Genre_3"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Genre_3}
                  />
                  <TextContainer
                    color={theme.colors.danger}
                    size={"1rem"}
                    text={errors.Genre_3 || ""}
                  />
                </Flex>
                <Flex direction="column" width="100%">
                  <Input
                    style={styles.pinInput}
                    textAlign="center"
                    _placeholder={{
                      color: theme.colors.ciTrans15,
                    }}
                    placeholder={genreArray[3]}
                    name={"Genre_4"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Genre_4}
                  />
                  <TextContainer
                    color={theme.colors.danger}
                    size={"1rem"}
                    text={errors.Genre_4 || ""}
                  />
                </Flex>
              </HStack>
            </FormControl>
          </Flex>

          {/* box 2 */}
          <Flex
            width={"48%"}
            height={"100%"}
            justifyContent={"space-around"}
            alignItems={"center"}
            direction={"column"}
            padding={theme.space[5]}
            color={theme.colors.white}
          >
            <FormControl
              style={styles.formControl}
              isInvalid={errors.AvatarName == "Required" && touched.AvatarName}
            >
              <FormLabel style={styles.labels}>Avatar Name</FormLabel>
              <Input
                placeholder="Enter Your Avatar"
                name="AvatarName"
                style={styles.input}
                _focus={{
                  border: `1px solid ${theme.colors.ci}`,
                }}
                _placeholder={{
                  color: theme.colors.ciTrans15,
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.AvatarName}
              />
              <TextContainer
                color={theme.colors.danger}
                size={"1rem"}
                text={errors.AvatarName || ""}
              />
            </FormControl>
            <FormControl
              style={styles.formControl}
              isInvalid={
                errors.AvatarImageURL == "Required" && touched.AvatarImageURL
              }
            >
              <FormLabel style={styles.labels}>Avatar Image URL</FormLabel>
              <Input
                placeholder="Enter Your Avatar URL"
                name="AvatarImageURL"
                style={styles.input}
                _focus={{
                  border: `1px solid ${theme.colors.ci}`,
                }}
                _placeholder={{
                  color: theme.colors.ciTrans15,
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.AvatarImageURL}
              />
              <TextContainer
                color={theme.colors.danger}
                size={"1rem"}
                text={errors.AvatarImageURL || ""}
              />
            </FormControl>
            <FormControl
              style={styles.formControl}
              isInvalid={errors.Address == "Required" && touched.Address}
            >
              <FormLabel style={styles.labels}>Address</FormLabel>
              <Input
                placeholder="Enter Your Address"
                name="Address"
                style={styles.input}
                _focus={{
                  border: `1px solid ${theme.colors.ci}`,
                }}
                _placeholder={{
                  color: theme.colors.ciTrans15,
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Address}
              />
              <TextContainer
                color={theme.colors.danger}
                size={"1rem"}
                text={errors.Address || ""}
              />
            </FormControl>
            <FormControl style={styles.formControl}>
              <FormLabel color={theme.colors.ci} style={styles.labels}>
                Current Location
              </FormLabel>
              <HStack
                width="50%"
                height="fit-content"
                marginTop={theme.space[3]}
              >
                <Input
                  placeholder="Latitude"
                  name="Latitude"
                  style={styles.input}
                  _focus={{
                    border: `1px solid ${theme.colors.ci}`,
                  }}
                  _placeholder={{
                    color: theme.colors.ciTrans15,
                  }}
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
                {/* <TextContainer
                  color={theme.colors.danger}
                  size={"1rem"}
                  text={errors.Latitude || ""}
                /> */}
                <Input
                  placeholder="Longitude"
                  name="Longitude"
                  style={styles.input}
                  _focus={{
                    border: `1px solid ${theme.colors.ci}`,
                  }}
                  _placeholder={{
                    color: theme.colors.ciTrans15,
                  }}
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
                {/* <TextContainer
                  color={theme.colors.danger}
                  size={"1rem"}
                  text={errors.Longitude || ""}
                /> */}
              </HStack>
            </FormControl>
            <FormControl style={styles.formControl}>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: theme.colors.transparent,
                }}
                type="submit"
                isLoading={isLoading}
                spinner={
                  <Spinner
                    thickness="2px"
                    speed="0.65s"
                    emptyColor={theme.colors.gray}
                    color={theme.colors.ci}
                    size="md"
                  />
                }
              >
                Create Role
              </Button>
            </FormControl>
          </Flex>
        </form>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default CreateRoleContainer;
