"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./sign.module.css";
import { Grid, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";

function Signed() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={styles.signUpForUserStudent}>
            {/* Efestoo card section */}
            <motion.div
                className={styles.groupParent}
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className={styles.cardHeader}>
                    <Image className={styles.groupIcon} width={150} height={50} alt="Group 26" src="/efestoo.webp" />
                    <div className={styles.welcomeTo}>{`Welcome to `}</div>
                    <div className={styles.efestoocom}>Efestoo.com</div>
                    <div className={styles.findExcitingCollege}>
                        <p>Find exciting college fests, concerts, workshops, and competitions in one place</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image className={styles.groupChild1} width={228} height={208} alt="Group 33" src="/Frame.png" />
                </div>
                 {/* Positioned Circle */}
                <div className={styles.roundCircle}></div>
                <div className={styles.cardFooter}>

                   


                    <div className={styles.lookingForAn}>
                        <p>
                            Looking for an event? Or planning a <br /> fun night with friends?
                        </p>
                    </div>

                    <div className={styles.contentWrapper}>
                        <div className={styles.findTheBest}>
                            Find the best events happening near you. Sign up and Book now to make every moment unforgettable!
                        </div>
                        <Image
                            className={styles.eventImage}
                            width={110}
                            height={80}
                            alt="Event Image"
                            src="/collge.png"
                        />
                    </div>
                </div>
                <div className={styles.getStartedBtn}>
                    Get Started →
                </div>

            </motion.div>

            {/* User form section */}
            <motion.div
                className={styles.userFormCard}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Header Section */}
                <div className={styles.createAnAccountParent}>
                    <h2 className={styles.createAnAccount}>Create an Account</h2>
                    <p className={styles.alreadyHaveAnContainer}>
                        Already have an account? <Link href="/login" className={styles.login}>Login</Link>
                    </p>
                </div>

                {/* User Input Form */}
                <form className={styles.formContainer}>
                    <Grid className={styles.gridContainer} container spacing={2} xs={12}>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Username" placeholder="Enter Username" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Mobile Number" placeholder="Enter Mobile Number" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Email" placeholder="Enter Email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Your Password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Link href="" className={styles.forgotPassword}>Forgot Password?</Link>

                    <Button variant="contained" fullWidth className={styles.getStartedButton}>
                        Get Started
                    </Button>
                </form>

                {/* Social Login Options */}
                <div className={styles.orDivider}>OR</div>
                <div className={styles.signInWith}>Sign in with</div>
                <div className={styles.socialLogin}>
                    <Link className={styles.navLinks} href="">
                        <Image width={32} height={32} alt="Google Icon" src="/devicon_google.svg" />
                    </Link>
                    <Link className={styles.navLinks} href="">
                        <Image width={32} height={32} alt="Facebook Icon" src="/logos_facebook.svg" />
                    </Link>
                    <Link className={styles.navLinks} href="">
                        <Image width={32} height={32} alt="Twitter Icon" src="/prime_twitter.svg" />
                    </Link>
                </div>

                <div className={styles.termsAndConditions}>Terms and Conditions apply</div>
            </motion.div>
        </div>
    );
}

export default Signed;
