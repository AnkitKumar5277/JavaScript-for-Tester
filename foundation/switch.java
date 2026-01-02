public class BrowserSelector {
    public static void main(String[] args) {
        String browser = "chrome";

        switch (browser.toLowerCase()) {
            case "chrome":
                System.out.println("Launching Google Chrome...");
                break;
            case "firefox":
                System.out.println("Launching Mozilla Firefox...");
                break;
            case "safari":
                System.out.println("Launching Apple Safari...");
                break;
            case "edge":
                System.out.println("Launching Microsoft Edge...");
                break;
            default:
                System.out.println("Browser not supported.");
                break;
        }
    }
}  
